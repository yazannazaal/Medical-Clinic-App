import HeroSection from "../../components/homeComps/HeroSection";
import NumbersSection from "../../components/homeComps/NumbersSection";
import ProfessionalCareSection from "../../components/homeComps/ProfessionalCareSection";
import ServicesSection from "../../components/homeComps/ServicesSection";
import TestimonialsSection from "../../components/homeComps/TestimonialsSection";

const Home = () => {
  return (
    <div className="h-screen">
      <HeroSection />

      <ServicesSection />

      <NumbersSection />

      <ProfessionalCareSection />

      <TestimonialsSection />
    </div>
  );
};

export default Home;
