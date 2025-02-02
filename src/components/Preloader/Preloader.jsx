import { slideUp } from "../../utils/index";
import { motion } from "framer-motion";
import { outsmart, ripple } from "../../assets";
import styles from "./Preloader.module.css";
import Lottie from "lottie-react";

const Preloader = () => {
  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className={`${styles.preloaderIntroduction} w-full h-screen flex justify-center flex-col items-center`}
    >
      <Lottie animationData={ripple} loop={true} className={`w-[200px]`}/>
      <motion.div
        initial={{ opacity: 0, filter: "blur(5px)" }} 
        animate={{ opacity: 1, filter: "blur(0px)" }} 
        transition={{ duration: 0.1, ease: "easeOut" }}
        className={`${styles.preloaderImg} flex justify-center`}
      >
        
        <img src={outsmart} alt="preloader" className={`preloader-img-main mt-3 ${styles.preloaderImg}`} />
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
