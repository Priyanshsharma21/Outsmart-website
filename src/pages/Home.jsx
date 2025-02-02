import React from 'react'
import styles from "./style.module.css"

import { Hero, OurVision, Service, WRV, 
  HeroBanner,
    OurGoal,
    WhoAreWe,
    OurServices
 } from '../components'

const Home = () => {
  return (
    <div>
        <HeroBanner />
        <div className={`${styles.infoStripe} w-full h-[50px] bg-[#FCB683]`}>
          Our Vision
        </div>
        <OurGoal />
        <div className={`${styles.infoStripe} w-full h-[50px] bg-[#FCB683]`}>
          Who are we ?
        </div>
        <WhoAreWe /> 
        <div className={`${styles.infoStripe} w-full h-[50px] bg-[#FCB683]`}>
          What we offer ?
        </div>
        <OurServices />
    </div>
  )
}

export default Home