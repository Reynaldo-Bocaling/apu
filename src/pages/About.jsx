import React from "react";
import Background from "../components/Background";
import Button from "../components/Button";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#ffb1b1]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-9 py-20 px-7">
        <div className="w-full md:w-1/2">
          <motion.h1
            initial={{ scale: 0, y: 0, opacity: 0 }}
            whileInView={{ scale: [0, 1], y: [-50, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="title-text text-stroke-sm text-7xl md:text-8xl text-red-10 font-bold text-center md:text-left md:leading-[12rem]"
          >
            hEY YOU
          </motion.h1>
          <motion.p
            initial={{ scale: 0, y: 0, opacity: 0 }}
            whileInView={{ scale: [0, 1], y: [-50, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="title-text text-stroke-sm text-2xl md:text-3xl text-white font-bold mb-9 text-center md:text-left mt-7 md:mt-0"
          >
            Apu, affectionately known as Helper, started as a simple,
            kind-hearted frog from Finland who captured the internet's heart.
            His journey from humble beginnings to global fame on platforms like
            Twitter and Reddit has been remarkable. <br /> <br />
            Now, apu is taking his charm to jew heights int the financial world.
            Join us in this exciting new chapter as apu makes his mark on Tron
            Blockchain
          </motion.p>
          <motion.div
            initial={{ scale: 0, y: 0, opacity: 0 }}
            whileInView={{ scale: [0, 1], y: [-50, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="flex items-center justify-start gap-7"
          >
            <Button url="" label="Buy Now" />
            <Button url="" label="Dextool" />
          </motion.div>
        </div>
        <motion.div
          initial={{ x: 0, y: 0, opacity: 0 }}
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2"
        >
          <img src="/img/about.png" alt="" />
        </motion.div>
      </div>
      <motion.img
        initial={{ rotate: 0, opacity: 0 }}
        animate={{ rotate: ["-10deg", 0], opacity: [0, 1] }}
        transition={{ duration: 0.7, delay: 1 }}
        src="/img/banner.jpg"
        alt=""
        className="w-full md:max-w-6xl mx-auto rounded-2xl shadow-box mt-0  rotate-12"
      />
      {/* <img
        src="/img/bg.jpg"
        className="w-full h-full absolute top-0 left-0 opacity-10"
        alt=""
      /> */}
    </section>
  );
};

export default About;
