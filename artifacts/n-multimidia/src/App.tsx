import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Carreira from "@/pages/Carreira";
import Sobre from "@/pages/Sobre";
import CRMLogin from "@/pages/crm/CRMLogin";
import CRMDashboard from "@/pages/crm/CRMDashboard";
import CRMDiagnostics from "@/pages/crm/CRMDiagnostics";
import CRMDiagnosticDetail from "@/pages/crm/CRMDiagnosticDetail";
import CRMGeoContent from "@/pages/crm/CRMGeoContent";
import CRMGeoContentEdit from "@/pages/crm/CRMGeoContentEdit";
import CRMSettings from "@/pages/crm/CRMSettings";
import { Header } from "@/components/sections/Header";
import { GeoBanner } from "@/components/sections/GeoBanner";
import { GeoProvider } from "@/context/GeoContext";
import { isAuthenticated } from "@/lib/crmAuth";

const queryClient = new QueryClient();

function CRMGuard({ children }: { children: React.ReactNode }) {
  const [, navigate] = useLocation();
  if (!isAuthenticated()) {
    navigate("/crm/login");
    return null;
  }
  return <>{children}</>;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/sobre" component={Sobre} />
      <Route path="/carreira" component={Carreira} />
      <Route path="/crm/login" component={CRMLogin} />
      <Route path="/crm/dashboard">
        <CRMGuard><CRMDashboard /></CRMGuard>
      </Route>
      <Route path="/crm/diagnostics/:id">
        {(params) => <CRMGuard><CRMDiagnosticDetail /></CRMGuard>}
      </Route>
      <Route path="/crm/diagnostics">
        <CRMGuard><CRMDiagnostics /></CRMGuard>
      </Route>
      <Route path="/crm/geo-content/:code">
        {(params) => <CRMGuard><CRMGeoContentEdit /></CRMGuard>}
      </Route>
      <Route path="/crm/geo-content">
        <CRMGuard><CRMGeoContent /></CRMGuard>
      </Route>
      <Route path="/crm/settings">
        <CRMGuard><CRMSettings /></CRMGuard>
      </Route>
      <Route path="/crm">
        <CRMGuard><CRMDashboard /></CRMGuard>
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function AppInner() {
  const [location] = useLocation();
  const isCRM = location.startsWith("/crm");

  return (
    <>
      {!isCRM && <Header />}
      {!isCRM && <GeoBanner />}
      <Router />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <GeoProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <AppInner />
          </WouterRouter>
          <Toaster />
        </GeoProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
