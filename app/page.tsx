import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HealYourself from "./components/HealYourself";
import Hero from "./components/Hero";
import Hosts from "./components/hosts";
import OurService from "./components/OurService";
import Retreat from "./components/retreat";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <Hero />
      <HealYourself />
      <Retreat/>
      <OurService /> 
      <Testimonials/>
      <FAQ/>
      <Hosts/>
      <Footer/>
           
    </main>
  );
}
