
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Documentation from "./pages/services/Documentation";
import SalesSupport from "./pages/services/SalesSupport";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import AccountsManagement from "./pages/services/AccountsManagement";
import CustomerService from "./pages/services/CustomerService";
import SoftwareSolutions from "./pages/services/SoftwareSolutions";
import Careers from "./pages/Careers";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import Founders from "./pages/Founders";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App: React.FC = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/documentation" element={<Documentation />} />
            <Route path="/services/sales-support" element={<SalesSupport />} />
            <Route path="/services/salessupport" element={<SalesSupport />} />
            <Route path="/services/digitalmarketing" element={<DigitalMarketing />} />
            <Route path="/services/FinancialManagement" element={<AccountsManagement />} />
            <Route path="/services/customerservice" element={<CustomerService />} />
            <Route path="/services/SoftwareSolutions" element={<SoftwareSolutions />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Management-team" element={<Founders />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
