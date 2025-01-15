import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ title, icon, index, description }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Tilt
      className="xs:w-[250px] w-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col relative"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[18px] font-bold text-center">
            {title}
          </h3>
          {hovered && (
            <div className="absolute inset-0 bg-black bg-opacity-90 text-white p-3 rounded-lg flex items-center justify-center text-center">
              <p className="text-sm md:text-base leading-relaxed">
                {description}
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </Tilt>
  );
};

const Services = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {services.map((service, index) => (
        <ServiceCard
          key={service.title}
          index={index}
          {...service}
          description={service.description}
        />
      ))}
    </div>
  );
};

export default SectionWrapper(Services, "about");
