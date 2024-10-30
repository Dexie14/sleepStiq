import productStick from "@/assets/productStick.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import star from "@/assets/star.svg";

import "swiper/swiper-bundle.css";

interface Testimonial {
  text: string;
  name: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    text: "Works great! Just use it and then relax, I fall asleep with no problem every time I use it.",
    name: "Rachel Dill",

    rating: 5,
  },
  {
    text: "It really helps me fall right to sleep compared to melatonin pills.",
    name: "Javier Mendez",

    rating: 5,
  },
  {
    text: "I've tried a lot of things to sleep but none of those worked, so I tried Cloudy and wow! I sleep like a baby now.",
    name: "Naomi Nwazurike",

    rating: 5,
  },
  {
    text: "I have been falling asleep faster and sleeping thru the night.",
    name: "Nate Jacobs",

    rating: 5,
  },
  {
    text: "It’s a really good product and helps me sleep better at night!",
    name: "Sarah Johnson",

    rating: 2,
  },
];

const ProductReview = () => {
  return (
    <section className="w-[90%] flex flex-col justify-self-end mb-24">
      <h3 className="font-bold text-cardText text-xl sm:text-3xl mb-12">
        Product Reviews
      </h3>
      <div className="flex justify-self-end ">
        <Swiper
          // slidesPerView={4}
          spaceBetween={150}
          loop={true}
          className="mySwiper "
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          centeredSlides={true}
          modules={[Pagination]}
        >
          {testimonials.map((testimonials, index) => (
            <SwiperSlide key={index}>
              <div className="bg-transparent flex sm:w-[306px] flex-col shadow-product h-[402px] rounded-[8px]">
                <div className="h-1/2">
                  <img src={productStick} alt="google" />
                </div>
                <div className="h-1/2 px-7 py-4 bg-white">
                  <p className="text-left text-cardText  italic h-1/2">
                    {testimonials?.text}
                  </p>
                  <div className="h-1/2">
                    <h6 className="text-cardText font-bold mt-2 ">
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
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductReview;
