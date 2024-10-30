import about from "@/assets/about.png";
import { Button } from "../ui/button";
import { useState } from "react";

const AboutProduct = () => {
  const [unit, setUnit] = useState<number>(2);

  return (
    <div className="my-16" id="about">
      <div className="md:flex justify-between w-11/12 md:w-[80%] mx-auto ">
        <img src={about} alt="about" />
        <div className="mt-32 w-11/12  md:w-[35%] mx-auto">
          <h3 className="font-bold text-xl sm:text-3xl">About Product</h3>
          <p className="text-fadedPrimary my-6 text-sm w-11/12">
            Our Personal Diffuser is an aromatherapy device that contains a
            blend of melatonin, lavender, and chamomile. A few breaths of our
            plant-based essential oil mist will mellow you out, quiet the mind,
            and lull you to bed.
          </p>
          <p className="text-fadedPrimary my-6 text-sm">
            😊 Promotes calm and relaxation.{" "}
            <p>💤 Inhalation allows for a rapid effect.</p>
            <p>
              ✅ 100% drug-free, plant-based ingredients.{" "}
              <p>⚕️ 3rd-party lab tested.</p> ‍
            </p>
          </p>
          <aside className="flex items-center gap-12 mb-5">
            <div>
              <p className="text-black">Price</p>
              <p className="text-black font-semibold">USD {25 * unit}</p>
            </div>
            <div>
              <p className="text-black">Unit</p>
              <input
                defaultValue={unit}
                type="number"
                onChange={(e) => setUnit(Number(e.target.value))}
                className="h-[33px] w-[63px] border border-primary rounded-[5px] pl-3"
              />
            </div>
          </aside>
          <Button className="bg-buttonColor w-[225px] h-[50px] rounded-[5px] text-white font-semibold font-openSans">
            Buy
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutProduct;
