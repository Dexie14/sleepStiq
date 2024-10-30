import WomanSleeps from "@/assets/WomanSleeps.png";

const Mission = () => {
  return (
    <div className="w-[90%] xl:flex xl:justify-self-end mx-auto xl:mx-0">
      <section className="xl:flex justify-between items-center">
        <div className="mb-5 xl:mb-0">
          <h3 className="font-bold text-xl sm:text-3xl">Our Mission</h3>
          <p className="text-fadedPrimary my-6 text-sm sm:w-[90%]">
            We started Sleepstiq with 1 simple goal: to be your best friend at
            bedtime. We, just like you, deal with stress, unease, and trouble
            sleeping from a number of silly things like school, work, screens,
            numbers, and people. That's why we created products that aim to -
          </p>
          <p className="text-fadedPrimary text-sm">✓ Promote Calm</p>
          <p className="text-fadedPrimary text-sm">✓ Support Sleep </p>
          <p className="text-fadedPrimary text-sm">✓ Reduce Stress </p>
          <p className="text-fadedPrimary text-sm">✓ Aid Relaxation</p>
        </div>
        <img src={WomanSleeps} alt="WomanSleeps" />
      </section>
    </div>
  );
};

export default Mission;
