const CACHE_VERSION = 'v1.0.1';
const STATIC_CACHE = `static-${CACHE_VERSION}`;
const DYNAMIC_CACHE = `dynamic-${CACHE_VERSION}`;

// Core assets that must be pre-cached to make the app shell work offline
const APP_SHELL = [
  '/',
  '/index.html',
  '/offline.html',
  '/favicon.ico',
  '/favicon-16x16.png',
  '/favicon-32x32.png',
  '/android-chrome-192x192.png',
  '/android-chrome-512x512.png',
  '/robots.txt'
];

// Install Event
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      console.log('[Service Worker] Pre-caching App Shell');
      return cache.addAll(APP_SHELL);
    }).then(() => {
      return self.skipWaiting();
    })
  );
});

// Activate Event
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating...');
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== STATIC_CACHE && key !== DYNAMIC_CACHE) {
            console.log('[Service Worker] Removing old cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Fetch Event
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle GET requests from our own origin
  if (request.method !== 'GET' || url.origin !== location.origin) {
    return;
  }

  // Strategy A: HTML navigation requests - Network-First
  // If the user is navigating to a page, try the network first to get the latest content.
  // Fall back to cache, and if that fails, show the offline page.
  if (request.mode === 'navigate' || request.headers.get('Accept')?.includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Put in dynamic cache for offline use
          const responseClone = response.clone();
          caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(request, responseClone);
          });
          return response;
        })
        .catch(() => {
          // If offline, check cache
          return caches.match(request).then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse;
            }
            // If not in cache, return the offline fallback page
            return caches.match('/offline.html');
          });
        })
    );
    return;
  }

  // Strategy B: Static assets (JS, CSS, images, fonts, icons) - Cache-First
  // Since Vite compiles with hashes (e.g. index-Bv3z1N2B.js), the content is immutable.
  // We can safely cache it forever. If the name changes, Vite handles it.
  const isAsset = url.pathname.includes('/assets/') || 
                  url.pathname.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|eot|ttf|otf|webp)$/);
  
  if (isAsset) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(request).then((response) => {
          if (!response || response.status !== 200) {
            return response;
          }
          const responseClone = response.clone();
          caches.open(STATIC_CACHE).then((cache) => {
            cache.put(request, responseClone);
          });
          return response;
        }).catch(() => {
          // For images, we could return a placeholder, or just fail
          if (request.url.match(/\.(png|jpg|jpeg|gif|svg|webp)$/)) {
            return caches.match('/placeholder.svg');
          }
          return new Response('Asset offline-unavailable', { status: 503 });
        });
      })
    );
    return;
  }

  // Strategy C: Generic Fallback (Stale-While-Revalidate) for other local requests
  event.respondWith(
    caches.open(DYNAMIC_CACHE).then((cache) => {
      return cache.match(request).then((cachedResponse) => {
        const fetchPromise = fetch(request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            cache.put(request, networkResponse.clone());
          }
          return networkResponse;
        }).catch(() => {
          // Ignore network errors, serve cached
        });
        return cachedResponse || fetchPromise;
      });
    })
  );
});
