import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/autoplay";

const Tech = () => {
  return (
    <div className="p-6 relative">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
      >
        {technologies.map((technology) => (
          <SwiperSlide key={technology.name}>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="flex flex-col items-center"
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-16 h-16 mb-2"
              />
              <p className="text-center">{technology.name}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 animate-scroll-line"></div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
