import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Services } from "@/components/sections/Services";
import { Results } from "@/components/sections/Results";
import { Process } from "@/components/sections/Process";
import { Culture } from "@/components/sections/Culture";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <Hero />
      <Problem />
      <Services />
      <Results />
      <Process />
      <Culture />
      <Contact />
      <Footer />
    </main>
  );
}
