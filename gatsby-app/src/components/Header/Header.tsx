import React from "react";
import * as styles from "./Header.module.css";
import Logo from "../Logo/Logo";

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  );
}