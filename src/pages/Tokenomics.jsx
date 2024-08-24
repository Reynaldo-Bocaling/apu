import React from "react";
import { tokenomics } from "../constant";
import { motion } from "framer-motion";

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="relative w-full px-2">
      <div className="max-w-6xl mx-auto bg-red-10 shadow-box flex flex-col items-center justify-center gap-5 py-12 md:py-5">
        <motion.h1
          initial={{ x: 0, y: 0, opacity: 0 }}
          whileInView={{ x: [-50, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="title-text text-stroke-md text-6xl md:text-9xl text-red-200 font-bold md:leading-[12rem]"
        >
          TOKENOMICS
        </motion.h1>
        <ul className="flex flex-col md:flex-row items-center justify-center gap-7 w-full px-7">
          {tokenomics.map((item, index) => (
            <motion.li
              initial={{ y: 0, opacity: 0 }}
              whileInView={{ y: [50, 0], opacity: [0, 1] }}
              transition={{ duration: 1 }}
              key={index}
              className="w-full md:w-1/3 p-5 flex flex-col items-center justify-center"
            >
              <h1 className="text-white text-stroke-xs font-titles text-7xl font-bold">
                {item.value}
              </h1>
              <h1 className="text-red-00 text-4xl font-bold mt-4">
                {item.name}
              </h1>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Tokenomics;
