import Feedback from "@/components/Home/Feedback";
import HeroSection from "@/components/Home/HeroSection";
import LogoCard from "@/components/Home/LogoCard";
import Mission from "@/components/Home/Mission";
import ProductReview from "@/components/Home/ProductReview";
import ShopComp from "@/components/Home/ShopComp";
import TestimonialComp from "@/components/Home/TestimonialComp";
import VisitShop from "@/components/Home/VisitShop";
import HeroLayout from "@/components/layout/HeroLayout";
import Footer from "@/components/menuBars/Footer";

const Home = () => {
  return (
    <div>
      <HeroLayout >
        <HeroSection />
      </HeroLayout>
      <LogoCard />
      <Feedback />
      <TestimonialComp />
      <ShopComp />
      <Mission />
      <VisitShop />
      <hr className=" border-t border-borderColor pb-14 sm:w-[80%] w-full mx-auto" />
      <ProductReview/>
      <Footer/>
    </div>
  );
};

export default Home;
