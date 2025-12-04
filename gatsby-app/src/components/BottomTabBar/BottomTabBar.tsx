import React from "react";
import * as styles from "./BottomTabBar.module.css";
import { Link } from "gatsby";
import { FaHome } from "react-icons/fa";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
interface TabItem {
  label: string;
  icon: React.ReactNode;
  isActive?: boolean;
}

const tabs: TabItem[] = [
  { label: "Home", icon: <FaHome size={20}/>, isActive: true },
  { label: "Menu", icon: <MdOutlineRestaurantMenu size={20}/> },
  { label: "Account", icon: <MdAccountCircle size={20} /> },
];

export const BottomTabBar: React.FC = () => {
  return (
    <nav className={styles.nav} aria-label="Mobile navigation">
      <ul className={styles.list}>
        {tabs.map((t) => (
          <li key={t.label} className={styles.item}>
            <Link to={`/${t.label.toLowerCase()}`} className={`${styles.button} ${t.isActive ? styles.active : ""}`}>
              <span className={styles.icon}>{t.icon}</span>
              <span className={styles.label}>{t.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};