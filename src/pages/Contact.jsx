import React from "react";
import { socials } from "../constant";
import { motion } from "framer-motion";
import SlidingText from "../components/SlidingText";

const Contact = () => {
  return (
    <section id="contact" className="relative w-full">
      <div className="max-w-7xl mx-auto py-9 px-3 flex flex-col items-center justify-center mt-12">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: [0, 1], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center"
        >
          <img src="/img/logo.png" className="w-24" alt="" />
          <h1 className="title-text text-stroke-xs text-7xl md:text-9xl text-red-10 font-bold md:leading-[12rem]">
            $APU
          </h1>
        </motion.div>

        {/* <motion.div
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center gap-3 md:gap-9 mt-9 w-full"
        >
          {socials.map((item, index) => (
            <a
              key={index}
              className="w-20 h-20 relative flex items-start justify-center py-4 bg-red-10 rounded-full"
            >
              <img src={item.img} className="w-12 h-12 z-30" alt="link icons" />
            </a>
          ))}
        </motion.div> */}

        <SlidingText />
      </div>
    </section>
  );
};

export default Contact;
