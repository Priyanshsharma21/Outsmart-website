import React, { useRef } from 'react';
import styles from "./OurService.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import Lottie from "lottie-react";
import { ripple } from '../../assets';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { serviceData } from '../../constants';
import { Row, Col } from "antd";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const OurServices = () => {
  const swiperRef = useRef(null);
  const sectionRef = useRef(null);
  
  // Store multiple references for headings, subheadings, and images
  const headingRefs = useRef([]);
  const subheadingRefs = useRef([]);
  const imageRefs = useRef([]);

  useGSAP(() => {
    serviceData.forEach((_, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 10%",
          scrub: true,
        },
      });

      // Apply animations to each slide's heading, subheading, and image separately
      tl.fromTo(
        [headingRefs.current[index], subheadingRefs.current[index]],
        { opacity: 0, y: -250 },
        { opacity: 1, y: 0, duration: 1.5 },
      );

      tl.fromTo(
        imageRefs.current[index],
        { opacity: 0, y: -150, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.5 },
        "-=1"
      );
    });
  }, []);

  return (
    <div ref={sectionRef} className={`w-full h-screen sticky top-0 ${styles.ourservice}`}>
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {serviceData.map((service, index) => (
          <SwiperSlide key={service.id}>
            <Row className={`w-full h-full border-l ${styles.ourServiceRow}`}>
              <Col className={`w-full h-full ${styles.ourServiceCol}`} xl={12} lg={12} md={24} sm={24} xs={24}>
                <div
                  ref={(el) => (imageRefs.current[index] = el)}
                  className={`flex justify-center items-center w-full h-full ${styles.ourLootieBox}`}
                >
                  <Lottie animationData={service.imgsrc} loop={true} className={`${styles.lootieStyle}`} />
                </div>
              </Col>
              <Col className={`w-full h-full ${styles.ourServiceCol}`} xl={12} lg={12} md={24} sm={24} xs={24}>
                <div className={styles.ourVisionBox}>
                  <h1 ref={(el) => (headingRefs.current[index] = el)} className={styles.ourVisionHead}>
                    {service.title}
                  </h1>
                  <p ref={(el) => (subheadingRefs.current[index] = el)} className={styles.ourVisionSubhead}>
                    {service.subtitle}
                  </p>
                </div>
              </Col>
            </Row>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className={styles.navButtons}>
        <button className={styles.navButton} onClick={() => swiperRef.current.swiper.slidePrev()}>
          <FaArrowLeft />
        </button>
        <button className={styles.navButton} onClick={() => swiperRef.current.swiper.slideNext()}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default OurServices;
