import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnalyticsTracker from "./components/AnalyticsTracker";

// Route-based code splitting — each page is loaded on demand
const Index = lazy(() => import("./pages/Index"));
const Services = lazy(() => import("./pages/Services"));
const NotFound = lazy(() => import("./pages/NotFound"));
const NanoplastiaAndheriEast = lazy(() => import("./pages/NanoplastiaAndheriEast"));
const BalayageSalonAndheri = lazy(() => import("./pages/BalayageSalonAndheri"));
const FamilySalonMarolMumbai = lazy(() => import("./pages/FamilySalonMarolMumbai"));
const ManicurePedicureMumbai = lazy(() => import("./pages/ManicurePedicureMumbai"));
const BestSalonAndheriEast = lazy(() => import("./pages/BestSalonAndheriEast"));
const HydraMediFacialAndheriEast = lazy(() => import("./pages/HydraMediFacialAndheriEast"));
const OlaplexHairTreatmentAndheriEast = lazy(() => import("./pages/OlaplexHairTreatmentAndheriEast"));
const SalonNearPowai = lazy(() => import("./pages/SalonNearPowai"));
const SalonNearGhatkopar = lazy(() => import("./pages/SalonNearGhatkopar"));
const SalonNearKurla = lazy(() => import("./pages/SalonNearKurla"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnalyticsTracker />
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/nanoplastia-andheri-east" element={<NanoplastiaAndheriEast />} />
            <Route path="/balayage-salon-andheri" element={<BalayageSalonAndheri />} />
            <Route path="/family-salon-marol-mumbai" element={<FamilySalonMarolMumbai />} />
            <Route path="/manicure-pedicure-mumbai" element={<ManicurePedicureMumbai />} />
            <Route path="/best-salon-andheri-east" element={<BestSalonAndheriEast />} />
            <Route path="/hydra-medi-facial-andheri-east" element={<HydraMediFacialAndheriEast />} />
            <Route path="/olaplex-hair-treatment-andheri-east" element={<OlaplexHairTreatmentAndheriEast />} />
            <Route path="/salon-near-powai" element={<SalonNearPowai />} />
            <Route path="/salon-near-ghatkopar" element={<SalonNearGhatkopar />} />
            <Route path="/salon-near-kurla" element={<SalonNearKurla />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
