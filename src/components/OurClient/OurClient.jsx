import React from 'react'
import styles from "./OurClient.module.css"
import { logo } from "../../assets"
import LogoWall from '../LogoWall'

const logoImgs = [
  { imgUrl: logo, altText: "React Bits Logo" },
  { imgUrl: logo, altText: "React Bits Logo" },
  { imgUrl: logo, altText: "React Bits Logo" },
  { imgUrl: logo, altText: "React Bits Logo" },
  { imgUrl: logo, altText: "React Bits Logo" },
  { imgUrl: logo, altText: "React Bits Logo" },
  { imgUrl: logo, altText: "React Bits Logo" }
]


const OurClient = () => {
  return (
    <div className={`w-full h-screen ${styles.ourClient}`}>
      <div className={styles.ourClientTitle}> 
        <div>Our Valued</div>
        <div>Clients</div>
      </div>
      <div className={styles.ourClientWall}>
        <LogoWall
          items={logoImgs}
          direction='horizontal'
          pauseOnHover={true}
          size='clamp(8rem, 1rem + 20vmin, 25rem)'
          duration='60s'
          bgColor='#060606'
          bgAccentColor='#111111'
        /> 
      </div>
    </div>
  )
}

export default OurClient