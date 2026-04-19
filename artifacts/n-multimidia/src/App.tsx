import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Carreira from "@/pages/Carreira";
import { Header } from "@/components/sections/Header";
import { GeoBanner } from "@/components/sections/GeoBanner";
import { GeoProvider } from "@/context/GeoContext";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/carreira" component={Carreira} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <GeoProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Header />
            <GeoBanner />
            <Router />
          </WouterRouter>
          <Toaster />
        </GeoProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
