import React from 'react';
import { Row, Col } from 'antd';
import styles from "./Service.module.css"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {motion} from "framer-motion"
import { serviceData } from '../../constants';

const Service = () => {
  return (
    <div className='w-full h-full bg-[#212A3C] flex justify-center items-center'>
        <div className={`${styles.serviceBox} bg-[#e2e2e2] w-full h-[125vh]`}>
             <h1 className={`${styles.serviceHeading} itemsubtitle2`}>Who are we ?</h1>

             <Row gutter={[16,16]}>
            {serviceData.map((item,i)=>(
                <Col key={item.id} xl={12} lg={12} md={24} sm={24} xs={24} className='mt-10'>
                    <div className={styles.scrviceCard}>
                        <div className="flex justify-center items-center">
                            <div className={styles.serviceCardImg}>
                                <img src={item.imgsrc} alt={item.title} />
                            </div>
                        </div>
                        <h1 className={styles.serviceCardTitle}>
                            {item.title}
                        </h1>
                        <p className={styles.serviceCardSubtitle}>
                            {item.subtitle}
                        </p>
                    </div>
                </Col>
            ))}
        </Row>
        </div>
    </div>
  )
}

export default Service