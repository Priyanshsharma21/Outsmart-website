import React, { useRef } from 'react';
import styles from "./OurGoal.module.css";
import { Row, Col } from "antd";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { ourVisionImg } from '../../assets';

gsap.registerPlugin(ScrollTrigger);

const OurGoal = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", // Starts animation when section enters the viewport
        end: "top 10%", // Ends animation when scrolling out
        scrub: true, // Smooth transition
      }
    });

    // Entering Animation
    tl.fromTo(
      [headingRef.current, subheadingRef.current], 
      { opacity: 0, y: -250 }, 
      { opacity: 1, y: 0, duration: 1.5 },
    );

    tl.fromTo(
      imageRef.current, 
      { opacity: 0, y: -150, filter: "blur(10px)" }, 
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.5 },
      "-=1" // Overlapping effect with text animation
    );

  }, []);

  return (
    <div ref={sectionRef} className={`w-full h-screen sticky top-0 ${styles.ourGoal}`}>
      <Row className={`${styles.ourVisionRow}`}>
        <Col xl={10} lg={10} md={24} sm={24} xs={24}>
          <div className={styles.ourVisionBox}>
            <h1 ref={headingRef} className={styles.ourVisionHead}>Our Vision</h1>
            <p ref={subheadingRef} className={styles.ourVisionSubhead}>
              To revolutionize the way early-stage startups approach sales, 
              providing innovative strategies and tools that drive sustainable growth.
            </p>
          </div>
        </Col>
        <Col xl={14} lg={14} md={24} sm={24} xs={24}>
          <div className={styles.ourGoalImgBox}>
            <img ref={imageRef} src={ourVisionImg} alt="our vision image" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default OurGoal;
