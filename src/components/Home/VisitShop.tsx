import { Button } from "../ui/button";

const VisitShop = () => {
  return (
    <div className="sm:w-[80%] w-11/12 mx-auto my-32">
      <h3 className="font-bold text-xl sm:text-3xl text-center">
        Visit Our Shop
      </h3>
      <p className="text-fadedPrimary my-6 text-sm sm:w-[70%] mx-auto text-center">
        Our Personal Diffuser is an aromatherapy device that contains a blend of
        melatonin, lavender, and chamomile. A few breaths of our plant-based
        essential oil mist will mellow you out, quiet the mind, and lull you to
        bed.
      </p>
      <div className="mx-auto w-[225px] ">
        <Button className="bg-buttonColor w-full h-[50px] rounded-[5px] text-white font-semibold font-openSans">
          Visit Shop
        </Button>
      </div>
    </div>
  );
};

export default VisitShop;
