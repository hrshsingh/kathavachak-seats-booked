
import { Hero } from "@/components/Hero";
import { FeaturedEvents } from "@/components/FeaturedEvents";
import { LocationSearch } from "@/components/LocationSearch";
import { FeaturedStorytellers } from "@/components/FeaturedStorytellers";
import { HowItWorks } from "@/components/HowItWorks";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <Header />
      <Hero />
      <LocationSearch />
      <FeaturedEvents />
      <FeaturedStorytellers />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;
