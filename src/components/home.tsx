import Navigation from "./Navigation";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";
import { Toaster } from "./ui/toaster";

function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default Home;