import styles from "./Hero.module.css";
import { motion } from "framer-motion";

const createRevealMask = (direction = "up", delay = 2.5) => ({
  initial: { y: direction === "up" ? "-100%" : "100%" },
  animate: {
    y: "0%",
    transition: { duration: 1, ease: [0.65, 0, 0.35, 1], delay },
  },
});

const Hero = () => {
  return (
    <div className="w-full h-[100%] bg-[#fff] flex flex-col items-center justify-center">
      <div className="w-full overflow-hidden">
        <motion.div
          variants={createRevealMask("up", 2.5)}
          initial="initial"
          animate="animate"
          className={styles.heroHeading}
        >
          <h1>Catalyzing Businesses</h1>
        </motion.div>
      </div>

      <div className="relative w-[98%] h-[90vh] heroImgBg overflow-hidden rounded-[2rem]">


        <div className={styles.heroContentBox}>
          <div className="w-full overflow-hidden">
            <motion.div
              variants={createRevealMask("down", 3.2)}
              initial="initial"
              animate="animate"
              className={styles.heroCompanyName}
            >
              <div className={styles.subHeadBox}>
                <p className={styles.heroSubHeading}>
                  Empowering Startups with Winning Sales Strategies.
                </p>
                <a href="#" className={styles.heroJoinUs}>Join Us</a>
              </div>
            </motion.div>
          </div>

          <div className="w-full overflow-hidden">
            <motion.div
              variants={createRevealMask("up", 3)}
              initial="initial"
              animate="animate"
              className={styles.heroCompanyName}
            >
              <p>Outsmart</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
