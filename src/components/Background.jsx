import React, { useEffect, useRef } from "react";
import BackgroundVideo from "/vid/bg.mp4";

const Background = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  return (
    <>
      <video
        loop
        playsInline
        muted
        autoPlay
        preload="yes"
        ref={videoRef}
        className="absolute z-[1] left-0 top-0 h-screen w-full object-cover opacity-5"
      >
        <source
          src={BackgroundVideo}
          type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'
        />
      </video>
    </>
  );
};

export default Background;
