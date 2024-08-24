import React from "react";
import Marquee from "react-fast-marquee";
const SlidingText = () => {
  return (
    <section className="relative w-full pu-4 overflow-hidden py-7 bg-red-10 rotate-3 md:rotate-2 -mt-3 z-[-1]">
      <Marquee direction="right">
        {Array.from({ length: 100 }, (_, i) => (
          <p
            key={i}
            className="text-yellow-500 text-3xl md:text-3xl font-bold font-extra px-12 z-10 text-stroke-xs"
          >
            BUY NOW
          </p>
        ))}
      </Marquee>
    </section>
  );
};

export default SlidingText;
