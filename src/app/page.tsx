import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Stats } from "@/components/sections/Stats";
import { Projects } from "@/components/sections/Projects";
import { Clients } from "@/components/sections/Clients";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/ui/ChatWidget";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Stats />
        <Projects />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
