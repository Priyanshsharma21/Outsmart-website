import React, { useRef, useEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from "./OurApproach.module.css"
import Lottie from "lottie-react";
import { ripple } from '../../assets';
import {  approachData } from "../../constants"
const OurApproach = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);


  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-900vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "8000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);


  return (
    <section className={`${styles.scrollSectionOuter}`}>
      <div ref={triggerRef}>
        <div ref={sectionRef} className={`${styles.scrollSectionInner}`}>

          <div className={`${styles.scrollSection} ${styles.scrollSectionIntro}`}>
            <div className={`${styles.rippleMain}`}>
              <Lottie animationData={ripple} loop={true} className={`${styles.lottieRipple}`} />
            </div>
            <div className={`${styles.approachIntroBox}`}>
              <h3 className={`${styles.rippleMainTitle}`}>Our approach to grow</h3>
              <h1 className={`${styles.rippleMainSubtitle}`}>Your Business</h1>
            </div>
          </div>

          {approachData.map((item, index) => (
            <div key={item.id} className={`${styles.scrollSection} scroll-section`}>
              <div className={styles.contentBox}>
                <div className={styles.imageWrapper}>
                  <Lottie animationData={item.lottieImg} loop={true} />
                </div>
                <div className={styles.textWrapper}>
                  <h3 
                  style={{background : index%2==0 ? "#2E2111" : "#88B7BD"}}
                   className={`${styles.wrapperTitle}`}>{item.title}</h3>
                  <p
                  style={{background : index%2==0 ? "#2E2111" : "#88B7BD"}}
                   className={`${styles.subTitle}`}>{item.description}</p>
                </div>
              </div>
            </div>
          ))}

          
        </div>
      </div>
    </section>
  )
}

export default OurApproach