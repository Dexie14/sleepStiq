const FaqHero = () => {
  return (
    <section>
      <div className="w-[80%] mx-auto pt-24">
        <p className="text-lg">We're here to help you</p>
        <h3 className="font-bold my-4 text-4xl sm:text-6xl">
          How can we assist?
        </h3>
        <section className="pb-44 ">
          <div className="bg-white flex items-center py-6 px-12 sm:w-[70%] rounded-[10px] ">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_1791)">
                <path
                  d="M13.3333 22.6667C18.488 22.6667 22.6667 18.488 22.6667 13.3333C22.6667 8.17868 18.488 4 13.3333 4C8.17868 4 4 8.17868 4 13.3333C4 18.488 8.17868 22.6667 13.3333 22.6667Z"
                  stroke="#2C3E50"
                  stroke-width="2.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M28 28L20 20"
                  stroke="#2C3E50"
                  stroke-width="2.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_1791">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <input
              type="text"
              placeholder="Search FAQs here"
              className="w-full ml-5 outline-none"
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default FaqHero;
