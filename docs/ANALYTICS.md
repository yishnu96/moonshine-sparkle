# Moon Studios — Analytics & Conversion Playbook

**Audience:** owner / marketer / whoever reads the numbers.
**Goal:** know how many bookings come in, by which channel (Call vs WhatsApp vs Form), from which page and traffic source — and act on it.

> The actual booking *completes* inside a phone call or a WhatsApp chat — both off-site and untrackable. So our measurable conversion is the **intent moment**: the tap-to-call or the hand-off to WhatsApp. Treat `phone_call_click` and `booking_start` as your conversions.

***

## 1. Tools in place

| Tool               | ID                          | Role                                                   |
| ------------------ | --------------------------- | ------------------------------------------------------ |
| GA4                | `G-YHS0ML3TRK`              | Primary web analytics + Google Ads conversions         |
| Google Tag Manager | `GTM-W5MQ8DCS`              | Tag container                                          |
| Google Ads         | `AW-7030919795`             | Ad conversion import                                   |
| Mixpanel           | `VITE_MIXPANEL_TOKEN` (env) | Product-analytics funnels; mirrors every GA4 event 1:1 |

Every event is sent to **both GA4 and Mixpanel** with identical names and properties, so reports match across tools.

***

## 2. The conversion funnel

```
page_view
   └─ section_view  (booking section scrolled into view)
        └─ booking_form_start   (user starts typing in the form)
             └─ CONVERSION
                 ├─ phone_call_click   → booking_method: phone
                 └─ booking_start      → booking_method: whatsapp
                                          booking_type: form | quick
```

* **`phone_call_click`** — any tap-to-call, anywhere on the site.
* **`booking_start`** — hand-off to WhatsApp. `booking_type: form` = filled the booking form (carries date/time/concern); `booking_type: quick` = tapped a WhatsApp button without the form.

***

## 3. Event reference

| Event                      | When it fires                                       | Key properties                                                                                                                                                |
| -------------------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `page_view`                | Every route change (SPA)                            | `page_path`, `page_title`, traffic-source fields                                                                                                              |
| `session_source_detected`  | Once per session                                    | full attribution (see §6)                                                                                                                                     |
| `section_view`             | A tracked section enters viewport                   | `section_name`, `section_label`                                                                                                                               |
| `booking_form_start`       | First keystroke/focus in booking form               | `booking_method`, `booking_type: form`                                                                                                                        |
| `booking_validation_error` | Form submitted with missing fields                  | `missing_name`, `missing_problem`, `missing_date`, `missing_time`                                                                                             |
| **`booking_start`**        | **WhatsApp hand-off (conversion)**                  | `booking_method: whatsapp`, `booking_type: form\|quick`, `section_name`, `service_name` (service sheet), `preferred_date`, `preferred_time`, `problem_length` |
| **`phone_call_click`**     | **Tap-to-call (conversion)**                        | `contact_method: phone`, `section_name`                                                                                                                       |
| `cta_click`                | Non-booking CTAs (scroll-to-booking, gallery, etc.) | `cta_type`, `cta_label`, `section_name`                                                                                                                       |
| `nav_click`                | Header / segment-tab navigation                     | `nav_label`, `destination`                                                                                                                                    |
| `service_card_tap`         | Service card opened (Services page)                 | `service_name`, `service_category`                                                                                                                            |
| `service_category_select`  | Category filter chosen                              | `service_category`                                                                                                                                            |
| `outbound_click`           | Click to an external domain                         | `outbound_domain`, `destination_url`                                                                                                                          |

Every event also carries the **traffic-source context** from §6, plus `page_path` and `page_title` — so any event can be sliced by page or channel.

***

## 4. The questions to answer (and how)

### Q1. How many bookings, and by which channel?

Count conversions split by method.

* **GA4:** Reports → Engagement → Events. Compare `phone_call_click` vs `booking_start`. Add `booking_method` / `booking_type` as a secondary dimension (needs custom dimensions, §5).
* **Read it as:** Phone = `phone_call_click`. WhatsApp-from-form = `booking_start` where `booking_type=form`. Quick WhatsApp = `booking_type=quick`.
* **Why it matters:** if 80% are Call, the phone line / reception is the bottleneck to staff. If WhatsApp dominates, response time in WhatsApp *is* your conversion rate.

### Q2. Which pages produce bookings?

Add `page_path` as a dimension on the two conversion events.

* The 12 SEO landing pages (e.g. `/nanoplastia-andheri-east`, `/best-salon-andheri-east`) vs the homepage vs `/services`.
* **Action:** double down on landing pages with high conversion-per-view; rewrite the ones with traffic but no conversions.

### Q3. Which traffic source converts best?

Break conversions down by `source_channel` (organic search, social, ai, paid, direct) — see §6.

* **Action:** shift budget / effort toward the channel with the best conversions-per-session, not the most traffic.

### Q4. Where do people drop off in the form?

Funnel: `section_view[booking]` → `booking_form_start` → `booking_start`.

* High `booking_form_start` but low `booking_start` = form friction. Cross-check `booking_validation_error` to see which field people miss.

### Q5. Which services drive WhatsApp bookings?

On the Services page, `booking_start` carries `service_name`. Break down by it.

* **Action:** feature the top-requested services more prominently; investigate popular-view / low-booking services.

***

## 5. One-time setup checklist (dashboards, not code)

### GA4

1. **Mark Key Events:** Admin → Events → toggle **Mark as key event** for `phone_call_click` and `booking_start`.
2. **Register custom dimensions** (Admin → Custom definitions → Create), event-scoped:
   * `booking_method`, `booking_type`, `section_name`, `service_name`, `source_channel`, `source_type`, `utm_campaign`.
   * *Until registered, these properties are collected but can't be used as report dimensions.*
3. **Build a funnel exploration:** Explore → Funnel → steps = `section_view` → `booking_form_start` → `booking_start`. Add breakdown by `booking_method`.
4. **DebugView:** Admin → DebugView to confirm events fire live (dev builds send `debug_mode`).

### Google Ads

* Import `phone_call_click` and `booking_start` as conversions (Tools → Conversions → Import → GA4). Set a sensible value if you want ROAS.

### Mixpanel

1. Set `VITE_MIXPANEL_TOKEN` in Vercel → Project Settings → Environment Variables, then redeploy. (Empty token = Mixpanel silently off, GA4 still runs.)
2. Build a **Funnel:** `booking_form_start` → `booking_start`, breakdown by `booking_method`.
3. Build an **Insights** report: `phone_call_click` + `booking_start` over time, segmented by `source_channel`.

***

## 6. Traffic-source attribution (automatic)

Every event is stamped with where the visitor came from — captured once per session from UTMs, ad click IDs (`gclid`/`fbclid`/`msclkid`), and referrer:

| Field                           | Meaning                   | Example values                                                        |
| ------------------------------- | ------------------------- | --------------------------------------------------------------------- |
| `source_channel`                | High-level bucket         | `search`, `social`, `ai`, `email`, `referral`, `direct`, `campaign`   |
| `source_type`                   | Finer detail              | `paid_search`, `organic`, `social_referral`, `ai_referral`            |
| `source_platform`               | Named source              | `google`, `instagram`, `chatgpt`, `facebook`                          |
| `utm_*`                         | Campaign tags             | `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term` |
| `landing_page` / `landing_path` | First page of the session | `/nanoplastia-andheri-east`                                           |

> **AI referrals** (ChatGPT, Gemini, Perplexity, Claude, Copilot) are detected as `source_channel: ai` — useful for tracking how much traffic now comes from AI assistants.

### UTM tagging convention

Always tag campaign links so they roll up cleanly. Lowercase, no spaces:

```
https://moonstudiossalon.in/?utm_source=instagram&utm_medium=social&utm_campaign=diwali_offer&utm_content=story_link
```

***

## 7. A simple weekly routine

1. **Total conversions** this week vs last (`phone_call_click` + `booking_start`).
2. **Channel mix** — Call vs WhatsApp-form vs quick-WhatsApp.
3. **Top converting pages** and **top converting traffic sources**.
4. **Form funnel** drop-off rate (`booking_form_start` → `booking_start`).
5. One action: fix the worst drop-off or double down on the best source.

***

## 8. Implementation notes (for devs)

* All tracking flows through `trackEvent()` / `trackPageView()` in `src/lib/analytics.ts`; both fan out to GA4 (`gtag`) and Mixpanel.
* A global click listener in `src/components/AnalyticsTracker.tsx` auto-tracks any element with `data-analytics-event=""`, plus raw `tel:` and `wa.me` links. **Prefer** **`data-analytics-*`** **attributes over inline** **`onClick`** **+** **`trackEvent`** to avoid double-firing (an element with both will fire twice).
* Add context with `data-analytics-<name>="value"` → becomes `<name>` snake-cased on the event (e.g. `data-analytics-booking-method` → `booking_method`).
* New conversions should reuse `phone_call_click` or `booking_start` with the right `booking_method` rather than inventing new event names — keeps the funnel countable.

