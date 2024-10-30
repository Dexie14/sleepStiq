import star from "@/assets/star.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/swiper-bundle.css";

interface Testimonial {
  text: string;
  name: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    text: "Love it! I have trouble falling asleep and this knocked me right out. Will be buying more.",
    name: "James Miller",

    rating: 5,
  },
  {
    text: "I work shift work. Swinging from days to nights is sometimes brutal for sleep. Thank you Sleepstiq.",
    name: "Eunice Oliver",

    rating: 5,
  },
  {
    text: "It’s a really good product and helps me sleep better at night!",
    name: "Laura Davies",

    rating: 5,
  },
  {
    text: "Helps me relax and remember to breathe. Stress level definitely goes down",
    name: "Jane Bocks",

    rating: 5,
  },
  {
    text: "It’s a really good product and helps me sleep better at night!",
    name: "Sarah Johnson",

    rating: 5,
  },
];

const TestimonialComp = () => {
  return (
    <div>
      <div className="w-[80%] flex justify-self-end">
        <Swiper
          // slidesPerView={4}
          spaceBetween={150}
          loop={true}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 250,
            },
          }}
          centeredSlides={true}
          modules={[Pagination]}
        >
          {testimonials.map((testimonials, index) => (
            <SwiperSlide key={index}>
              <div className="bg-cardBg flex min-w-[306px] flex-col space-y-3 py-5 pl-7 pr-2  h-[202px] rounded-[8px]">
                <p className="text-left text-cardText  italic h-1/2">
                  {testimonials?.text}
                </p>
                <div className="h-1/2">
                  <h6 className="text-cardText font-bold ">
                    {testimonials?.name}
                  </h6>
                  <div className="flex my-2 ">
                    {Array(testimonials?.rating)
                      .fill(
                        <span className="text-yellow-400 text-2xl">
                          <img src={star} alt="star" />
                        </span>
                      )
                      .map((star, i) => (
                        <span key={i}>{star}</span>
                      ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialComp;
