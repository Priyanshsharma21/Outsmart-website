import React, { useRef } from 'react';
import styles from "./Who.module.css";
import { Row, Col } from 'antd';
import { whoAreWeData } from '../../constants';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Lottie from "lottie-react";
import { ripple } from '../../assets';

gsap.registerPlugin();

const WhoAreWe = () => {
  const sectionRef = useRef(null);
  const textRefs = useRef([]);
  const lottieRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      }
    });

    tl.fromTo(
      textRefs.current,
      { opacity: 0, y: -150 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
    );

    tl.fromTo(
      lottieRef.current,
      { opacity: 0,y: -150, scale: 0.8 },
      { opacity: 1,y: 0, scale: 1, duration: 1.5 },
      "-=0.5"
    );
  }, []);

  return (
    <div ref={sectionRef} className={`w-full h-screen sticky top-0 ${styles.whoarewe}`}>
      <Row className={styles.wrvRow}>
        <Col xl={14} lg={14} md={24} sm={24} xs={24} className={`h-screen ${styles.wrvCol}`}>
          <div className={`flex h-full justify-center text-white ${styles.wvrLeft}`}>
            {whoAreWeData.map((item, index) => (
              <div key={item.ourVisionHeading} className="border-r border-white pr-10 flex flex-col justify-between wrvNoMobBorder" ref={el => textRefs.current[index] = el}>
                <div className={styles.wrvCover}>
                  <h1 className={`${styles.wrvNum} overflow-hidden`}>{item.id}.</h1>
                  <h2 className={`${styles.wrvTitle} overflow-hidden`}>{item.title}</h2>
                </div>
                <p className={`${styles.wrvSubTitle} overflow-hidden`}>{item.subtitle}</p>
              </div>
            ))}
          </div>
        </Col>
        <Col xl={10} lg={10} md={24} sm={24} xs={24} className={`h-screen ${styles.wrvCol} ${styles.wrvCol2}`}>
          <div ref={lottieRef} className={`flex justify-center items-center w-full h-full`}>
            <Lottie animationData={ripple} loop={true} className={`w-[400px]`} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default WhoAreWe;
