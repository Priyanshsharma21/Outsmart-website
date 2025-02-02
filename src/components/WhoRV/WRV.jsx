import React from 'react';
import { Row, Col, Button } from 'antd';
import { whorv } from '../../assets';
import styles from "./WRV.module.css"
import { whoAreWeData } from '../../constants';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {motion} from "framer-motion"

const WRV = () => {

  useGSAP(() => {
    // Text Mask Reveal Animation
    gsap.fromTo(
      ".itemid",
      { y: "100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".itemtitle",
          start: "top 80%", // Starts animation when heading reaches 80% of viewport
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      ".itemtitle",
      { y: "100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 1.2,
        delay: 0.2, // Slight delay after heading
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".itemtitle",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );


    gsap.fromTo(
      ".itemsubtitle",
      { y: "100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 1.2,
        delay: 0.2, // Slight delay after heading
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".itemtitle",
          start: "top 35%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      ".itemsubtitle2",
      { y: "100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 1.2,
        delay: 0.2, // Slight delay after heading
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".itemtitle",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );


    
  });

  return (
    <div className={`w-full h-screen border-b border-white bg-[#212A3C] flex items-center justify-center ${styles.wrvMain}`}>
      <Row xl={[32, 32]} className="w-full h-full wrvRow">

      
        {/* Left Column with 3 Sections */}
        <Col xl={16} lg={16} md={24} sm={24} xs={24} className="w-full colswrv">
          <div className={`flex h-full justify-center text-white ${styles.wvrLeft}`}>

          {whoAreWeData.map((item,i)=>(
            <div key={item.ourVisionHeading} className="border-r border-white pr-10 flex flex-col justify-between wrvNoMobBorder">
              <div className={styles.wrvCover}>
                <h1 className={`${styles.wrvNum} itemid overflow-hidden`}>{item.id}.</h1>
                <h2 className={`${styles.wrvTitle} itemtitle overflow-hidden`}>{item.title}</h2>
              </div>
              <p className={`${styles.wrvSubTitle} itemsubtitle overflow-hidden`}>
                {item.subtitle}
              </p>
            </div>
          ))}
            
          </div>
        </Col>

        <Col xl={8} lg={8} md={24} sm={24} xs={24} className="flex justify-center w-full m-0 p-0 colswrv">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Image */}
            <img
              src={whorv}
              alt="Who We Are"
              className="w-full h-full object-cover shadow-lg"
            />
            <motion.p 
            className={`${styles.ourVisionHeading} itemsubtitle2`}>Who are we ?</motion.p>
            <motion.a href="#" 
            className={`${styles.heroJoinUs}`}>Join Us</motion.a>

          </div>
        </Col>

      </Row>
    </div>
  );
};

export default WRV;