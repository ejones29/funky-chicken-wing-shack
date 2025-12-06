import React from "react";
import * as styles from "./Hero.module.css";
// import FunkyChickenMascot from "../../assets/images/funky-chicken-mascot.png";
import { FunkyMascot } from "../FunkyMascot/FunkyMascot";
import mascotImgAsset from "../../assets/images/funky-chicken-mascot.png";

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>
          Get Funky.
          <br />
          <span className={`${styles.subHeading} tilted pinkText`}>
            Get Saucy.
          </span>
        </h1>

        {/* <img
          src={mascotImgAsset}
          alt="Funky Chicken mascot"
          className={styles.image}
        /> */}

        <FunkyMascot />
      </div>
    </section>
  );
};
