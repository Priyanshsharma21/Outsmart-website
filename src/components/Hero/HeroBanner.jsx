import React, { useState, useEffect, useRef } from 'react';
import styles from "./HeroBanner.module.css";
import Lottie from "lottie-react";
import { ripple } from '../../assets';
import Tilt from 'react-parallax-tilt';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from "framer-motion"

const text = "Empowering startups with strategic sales solutions to scale smarter and grow faster.";

const createRevealMask = (direction = "up", delay = 3) => ({
  initial: { y: direction === "up" ? "-100%" : "100%" },
  animate: {
    y: "0%",
    transition: { duration: 1, ease: [0.65, 0, 0.35, 1], delay },
  },
});


const HeroBanner = () => {
  const [isPreloaded, setIsPreloaded] = useState(false);
  const wordsRef = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const preloaderTimer = setTimeout(() => {
      setIsPreloaded(true);
    }, 3000); // 3 seconds for preloader

    return () => clearTimeout(preloaderTimer);
  }, []);

  useEffect(() => {
    if (isPreloaded && containerRef.current) {
      // Creating GSAP timeline for the staggered animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom", 
          end: "bottom top", 
          once: true,
        }
      });

      tl.from(wordsRef.current, {
        y: "100%",
        opacity: 0,
        stagger: 0.1, // Stagger the words
        duration: 0.6,
        ease: "power4.out",
      });
    }
  }, [isPreloaded]);

  return (
    <div className={`w-full h-screen sticky top-0 ${styles.heroBanner}`}>
      <div className={styles.grainOverlay} />

      <Tilt
        className="background-stripes track-on-window"
        perspective={2500}
        glareEnable={true}
        glareMaxOpacity={0}
        glarePosition="all"
        trackOnWindow={true}
        tiltAxis={"y"}
      >
       <div className="w-full overflow-hidden">
              <motion.div
                variants={createRevealMask("up", 2.5)}
                initial="initial"
                animate="animate"
                className={styles.heroHeading}
              >
                <div className={`${styles.heroHead}`}>outsmart</div>
              </motion.div>
          </div>
      </Tilt>

      <div className={`absolute ${styles.heroRipple}`}>
        <Lottie animationData={ripple} loop={true} className={`w-[200px]`} />
      </div>

      <div className={`${styles.heroBottomSections}`} ref={containerRef}>
        {/* Word-by-word staggered mask reveal */}
        {isPreloaded && (
          <h1 className={`${styles.heroSubhead}`}>
          {text.split(" ").map((word, index) => (
            <span
              key={index}
              className={styles.word}
              ref={(el) => wordsRef.current[index] = el} // Assign each word to the ref
            >
              {word}&nbsp;
            </span>
          ))}
        </h1>
        )}

        {isPreloaded && (
          <motion.div
           initial={{ opacity: 0, filter: "blur(5px)" }} 
            animate={{ opacity: 1, filter: "blur(0px)" }} 
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={styles.heroBtnWrapper}
          >
            <a href="#" className={styles.heroJoinUs}>Join Us</a>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default HeroBanner;
