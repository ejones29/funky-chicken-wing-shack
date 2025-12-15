import React from "react";
import * as styles from "./Header.module.css";
import Logo from "../Logo/Logo";
import { HeaderNav } from "../HeaderNav/HeaderNav";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function Header() {
  const isTabletBp = useMediaQuery("(min-width: 768px)");
  return (
    <header className={styles.header}>
      <Logo />
      {isTabletBp && <HeaderNav />}
    </header>
  );
}
