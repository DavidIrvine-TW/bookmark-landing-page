import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import SliderSection from "./components/SliderSection";
import Download from "./components/Download";
import FAQ from "./components/FAQ";
import EmailSection from "./components/EmailSection";
import Foot from "./components/Foot";
import { useState } from "react";
import MenuMobile from "./components/MenuMobile";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  console.log(menuOpen);

  return (
    <div className="wrapper mx-auto max-w-[1440px] border overflow-hidden">
      <MenuMobile menuOpen={menuOpen} />
      <Navbar setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <Hero />
      <Features />
      <SliderSection />
      <Download />
      <FAQ />
      <EmailSection />
      <Foot />
    </div>
  );
}

export default App;
