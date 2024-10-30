import shop from "@/assets/ShopImage.png";
import { Button } from "../ui/button";

const ShopComp = () => {
  return (
    <div className="my-16 md:w-[90%] ">
      <hr className=" border-t border-borderColor pb-14 sm:w-[90%] w-full md:flex md:justify-self-end" />
      <div className="md:flex ">
        <img src={shop} alt="shop" />
        <div className="md:mt-32 w-11/12 md:w-full mx-auto">
          <h3 className="font-bold text-xl sm:text-3xl">Shop Now</h3>
          <p className="text-fadedPrimary my-6 text-sm">
            Our Personal Diffuser is an aromatherapy device that contains a
            blend of melatonin, lavender, and chamomile. A few breaths of our
            plant-based essential oil mist will mellow you out, quiet the mind,
            and lull you to bed.
          </p>
          <Button className="bg-buttonColor w-[225px] h-[50px] rounded-[5px] text-white font-semibold font-openSans">
            Visit Shop
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShopComp;
