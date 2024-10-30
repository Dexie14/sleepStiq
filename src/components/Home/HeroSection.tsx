import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section>
      <div className="w-[80%] mx-auto pt-24">
        <p className="text-lg">We're here to help you</p>
        <h3 className="font-bold my-4 text-4xl sm:text-6xl">Relax & Rest</h3>
        <p className="sm:w-[52%]">
          With the aid of our Melatonin Sleepstiq, we can assure you that you
          can get quality sleep.
        </p>
        <Button className="bg-buttonColor w-[225px] h-[50px] rounded-[5px] text-white font-semibold font-openSans mt-6 mb-72">
          Visit Shop
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
