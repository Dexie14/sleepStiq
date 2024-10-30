import { FaCaretRight } from "react-icons/fa";
import ceoAvatar from "@/assets/ceoAvatar.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";

import { Pagination } from "swiper/modules";

interface Testimonial {
  text: string;
  name: string;
  title: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    text: "I’m a very anxious person but use this and feel so relaxed and sleep way better now with the aid of sleepstiq.",
    name: "James Miller",
    title: "CEO, Techbias",
    avatar: ceoAvatar,
  },
  {
    text: "I’m a very anxious person but use this and feel so relaxed and sleep way better now with the aid of sleepstiq.",
    name: "Sarah Johnson",
    title: "Product Manager",
    avatar: ceoAvatar,
  },
];

const Feedback = () => {
  return (
    <section className="my-24 md:w-[80%] w-11/12 mx-auto md:flex justify-between">
      <div className="md:w-[50%]">
        <p className="text-sm">Our Amazing Story</p>
        <h3 className="font-bold my-6 sm:text-3xl text-xl">
          10k+Happ
          <span className="bg-fadedBackground pb-3 ml-0 ">y Customers</span>
        </h3>
        <p className=" text-fadedPrimary my-10 w-[85%]">
          There’s no secret sauce, no wizard behind the curtain. What makes
          Aerolab tick is an interdisciplinary team with a framework that
          fosters candid collaboration.
        </p>
        <p className="flex items-center cursor-pointer">
          <FaCaretRight />
          <u className=" font-bold">More know About us</u>
        </p>
      </div>
      <div className="md:w-[40%] mt-5 md:mt-0">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          loop={true}
          className="mySwiper"
        >
          {testimonials.map((testimonials, index) => (
            <SwiperSlide key={index}>
              <div className="bg-cardBg py-12 px-1 md:px-0 shadow-card h-fit ">
                <p className="text-left text-cardText sm:w-[60%] w-[90%] mx-auto italic">
                  {testimonials?.text}
                </p>
                <div className="flex items-center gap-8 mt-12 sm:w-[60%] w-[90%] mx-auto">
                  <img src={testimonials?.avatar} alt="ceoAvatar" />
                  <div>
                    <h6 className="text-cardText font-bold text-xl">
                      {testimonials?.name}
                    </h6>
                    <p className="text-[#152934]">{testimonials?.title}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Feedback;
