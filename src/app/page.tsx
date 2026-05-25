import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Oeffnungszeiten from "@/components/Oeffnungszeiten";
import Atmosphaere from "@/components/Atmosphaere";
import Wochenkarte from "@/components/Wochenkarte";
import Galerie from "@/components/Galerie";
import Geschichte from "@/components/Geschichte";
import Kontakt from "@/components/Kontakt";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Oeffnungszeiten />
      <Atmosphaere />
      <Wochenkarte />
      <Galerie />
      <Geschichte />
      <Kontakt />
      <Footer />
    </>
  );
}
