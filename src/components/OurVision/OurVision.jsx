import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { ourvision } from "../../assets";
import styles from "./OurVision.module.css";

gsap.registerPlugin(ScrollTrigger);

const OurVision = () => {
  useGSAP(() => {
    // Text Mask Reveal Animation
    gsap.fromTo(
      ".vision-heading",
      { y: "100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".vision-heading",
          start: "top 80%", // Starts animation when heading reaches 80% of viewport
          toggleActions: "play none none none",
          scrub : true
        },
      }
    );

    gsap.fromTo(
      ".vision-subtext",
      { y: "100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 1.2,
        delay: 0.2, // Slight delay after heading
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".vision-subtext",
          start: "top 85%",
          toggleActions: "play none none none",
          scrub : true
        },
      }
    );

    // Image Mask Reveal Animation (Already Implemented)
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#vision-clip",
        start: "top top",
        end: "+=800",
        scrub: 0.5,
        pin: true,
        pinSpacing: false,
      },
    });

    clipAnimation.fromTo(
      ".mask-clip-path",
      { clipPath: "polygon(20% 20%, 80% 20%, 80% 80%, 20% 80%)", borderRadius: "20%" },
      { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", borderRadius: "0%" }
    );
  });

  return (
    <div id="about" className="min-h-screen bg-[#fff] w-full overflow-hidden">
      {/* Text Content */}
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-2">
        <p className={`${styles.ourVisionHeading} vision-heading`}>Our Vision</p>

        <div className="about-subtext">
          <p className={`${styles.subhead} vision-subtext`}>
            To <span>revolutionize</span> the way <span>early-stage startups</span> approach sales, 
            providing <span>innovative strategies</span> and tools that drive <span>sustainable growth</span>.
          </p>
        </div>
      </div>

      {/* Masked and Pinned Image Section */}
      <div className="h-[100vh] w-full overflow-hidden" id="vision-clip">
        <div className="mask-clip-path relative w-full h-full overflow-hidden">
          <img
            src={ourvision}
            alt="Background"
            className="absolute left-0 top-0 w-full h-full object-cover overflow-hidden"
          />
        </div>
      </div>

      {/* Next Section (ensures smooth scrolling transition) */}
      <div className={`h-[125vh] flex items-center justify-center bg-[#edf8ff] ${styles.pinSpacer}`}></div>
    </div>
  );
};

export default OurVision;
