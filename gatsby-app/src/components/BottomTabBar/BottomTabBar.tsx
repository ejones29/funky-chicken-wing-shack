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
  to: string;
}

const tabs: TabItem[] = [
  { label: "Home", icon: <FaHome size={20}/>, isActive: true, to: "/" },
  { label: "Menu", icon: <MdOutlineRestaurantMenu size={20} />, to: "/menu" },
  { label: "Account", icon: <MdAccountCircle size={20} />, to: "/account" },
];

export const BottomTabBar: React.FC = () => {
  return (
    <nav className={styles.nav} aria-label="Mobile navigation">
      <ul className={styles.list}>
        {tabs.map((item) => (
          <li key={item.label} className={styles.item}>
            <Link to={item.to} className={`${styles.button} ${item.isActive ? styles.active : ""}`}>
              <span className={styles.icon}>{item.icon}</span>
              <span className={styles.label}>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};