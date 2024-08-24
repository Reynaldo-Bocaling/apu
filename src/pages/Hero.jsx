import SlidingText from "../components/SlidingText";
import { motion } from "framer-motion";
import { socials } from "../constant";
const Hero = () => {
  return (
    <section id="hero" className="relative w-full z-40">
      <SlidingText />
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-start pb-9 md:px-5">
        <motion.img
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          src="/img/hero.png"
          className="w-full md:w-[50rem] md:-mt-24"
        />
        <motion.h1
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="title-text text-stroke-md text-9xl md:text-15xl text-red-10 font-bold md:leading-[12rem] -mt-24 md:-mt-52 z-30"
        >
          $APU
        </motion.h1>
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center gap-3 md:gap-9 w-full"
        >
          {socials.map((item, index) => (
            <a
              key={index}
              className="w-20 h-20 relative flex items-start justify-center py-4 bg-red-10 rounded-full"
            >
              <img src={item.img} className="w-12 h-12 z-30" alt="link icons" />
            </a>
          ))}
        </motion.div>
        <img src="/img/hero.jpg" alt="" />
      </div>

      <img
        src="/img/herobg.jpg"
        className="w-full h-full absolute left-0 top-0 opacity-10 z-20"
        alt=""
      />
    </section>
  );
};

export default Hero;
