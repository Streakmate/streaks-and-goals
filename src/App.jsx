import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { navItems } from "./nav-items";
import Index from "./pages/Index";
import EarlyAccess from "./pages/EarlyAccess";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    console.log("Base URL:", import.meta.env.VITE_BASE_URL);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/early-access" element={<EarlyAccess />} />
            {navItems.map(({ to, page }) => (
              <Route key={to} path={to} element={page} />
            ))}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
