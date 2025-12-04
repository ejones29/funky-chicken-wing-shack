import React from "react";
import * as styles from "./BottomTabBar.module.css";
import { Link } from "gatsby";

interface TabItem {
  label: string;
  icon: React.ReactNode;
  isActive?: boolean;
}

const tabs: TabItem[] = [
  { label: "Home", icon: "🏠", isActive: true },
  { label: "Menu", icon: "📋" },
  { label: "Account", icon: "👤" },
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