import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HealYourself from "./components/HealYourself";
import Hero from "./components/Hero";
import Hosts from "./components/hosts";
import OurService from "./components/OurService";
import Retreat from "./components/retreat";
import Testimonials from "./components/Testimonials";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "name": "Ayurveda Gokarna",
  "description": "Holistic healing and wellness retreat offering authentic Ayurvedic treatments, Panchakarma therapy, yoga, and meditation in Gokarna, Karnataka, India",
  "url": process.env.NEXT_PUBLIC_SITE_URL || "https://ayurvedagokarna.com",
  "logo": `${process.env.NEXT_PUBLIC_SITE_URL || "https://ayurvedagokarna.com"}/ayurvedaLogo.jpeg`,
  "image": `${process.env.NEXT_PUBLIC_SITE_URL || "https://ayurvedagokarna.com"}/ayurvedaLogo.jpeg`,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Gokarna",
    "addressRegion": "Karnataka",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "14.5500",
    "longitude": "74.3167"
  },
  "priceRange": "$$",
  "telephone": "+91-XXXXX-XXXXX",
  "email": "info@ayurvedagokarna.com",
  "openingHours": "Mo-Su 08:00-20:00",
  "serviceType": [
    "Ayurvedic Treatments",
    "Panchakarma Therapy",
    "Yoga Classes",
    "Meditation Sessions",
    "Wellness Retreats"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "India"
  }
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen w-full overflow-x-hidden">
        {/* <Header /> */}
        <Hero />
        <HealYourself />
        <Retreat/>
        <OurService /> 
        <Testimonials/>
        <FAQ/>
        <Hosts/>
        <Footer/>
      </main>
    </>
  );
}
