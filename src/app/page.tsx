import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Oeffnungszeiten from "@/components/Oeffnungszeiten";
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
      <Wochenkarte />
      <Galerie />
      <Geschichte />
      <Kontakt />
      <Footer />
    </>
  );
}
