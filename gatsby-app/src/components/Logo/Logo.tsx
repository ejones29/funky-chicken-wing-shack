import React from "react";
import FunkyChickenLogo from "../../assets/brand/fc-logo-wordmark.svg";
import * as styles from "./Logo.module.css";
import { Link } from "gatsby";

export default function Logo() {
  return (
    <div className={styles.logoContainer}>
      <Link to="/">
        <FunkyChickenLogo />
      </Link>
    </div>
  );
}
