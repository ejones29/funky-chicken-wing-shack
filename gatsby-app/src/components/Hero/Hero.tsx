import React from "react";
import * as styles from "./Hero.module.css";
import { FunkyMascot } from "../FunkyMascot/FunkyMascot";

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
        <FunkyMascot />
      </div>
    </section>
  );
};
