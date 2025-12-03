import React from "react";
import FunkyChickenLogo from "../../assets/funky-chicken-logo.svg";
import * as styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logoContainer}>
      
        <FunkyChickenLogo />
      
    </div>
  );
}
