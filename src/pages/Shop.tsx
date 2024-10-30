import TestimonialComp from "@/components/Home/TestimonialComp";
import AboutProduct from "@/components/Shop/AboutProduct";
import ShopHeroSection from "@/components/Shop/ShopHeroSection";
import HeroLayout from "@/components/layout/HeroLayout";
import Footer from "@/components/menuBars/Footer";

const Shop = () => {
  return (
    <div>
      <HeroLayout>
        <ShopHeroSection />
      </HeroLayout>
      <AboutProduct />
      <hr className=" border-t border-borderColor pb-14 sm:w-[80%] w-full mx-auto" />
      <div className="mb-14">
        <TestimonialComp />
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
