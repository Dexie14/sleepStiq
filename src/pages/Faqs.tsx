import FaqHero from "@/components/FAQ/FaqHero";
import Faqsection from "@/components/FAQ/Faqsection";
import HeroLayout from "@/components/layout/HeroLayout";
import Footer from "@/components/menuBars/Footer";

const Faqs = () => {
  return (
    <div>
      <HeroLayout>
        <FaqHero />
      </HeroLayout>
      <Faqsection/>
      <Footer />
    </div>
  );
};

export default Faqs;
