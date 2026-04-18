import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Services } from "@/components/sections/Services";
import { Results } from "@/components/sections/Results";
import { Iceberg } from "@/components/sections/Iceberg";
import { BuyerJourney } from "@/components/sections/BuyerJourney";
import { Process } from "@/components/sections/Process";
import { Objections } from "@/components/sections/Objections";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <Hero />
      <div id="servicos"><Problem /></div>
      <Services />
      <div id="resultados"><Results /></div>
      <Iceberg />
      <BuyerJourney />
      <div id="processo"><Process /></div>
      <Objections />
      <div id="contato"><Contact /></div>
      <Footer />
    </main>
  );
}
