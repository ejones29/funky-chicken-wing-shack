import React from "react";
import * as styles from "./BottomTabBar.module.css";
import { Link } from "gatsby";

import HomeIcon from "../../assets/icons/home-icon.svg";
import MenuIcon from "../../assets/icons/menu-icon.svg";
import AccountIcon from "../../assets/icons/account-icon.svg";
interface TabItem {
  label: string;
  icon: React.ReactNode;
  to: string;
}

const tabs: TabItem[] = [
  { label: "Home", icon: <HomeIcon />, to: "/" },
  { label: "Menu", icon: <MenuIcon />, to: "/menu" },
  { label: "Account", icon: <AccountIcon />, to: "/account" },
];

export const BottomTabBar: React.FC = () => {
  return (
    <nav className={styles.nav} aria-label="Mobile navigation">
      <ul className={styles.list}>
        {tabs.map((item) => (
          <li key={item.label} className={styles.item}>
            <Link
              to={item.to}
              className={styles.button}
              activeClassName={styles.active}
            >
              <span className={styles.icon}>{item.icon}</span>
              <span className={styles.label}>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
