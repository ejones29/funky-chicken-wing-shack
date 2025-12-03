import React from "react";
import * as styles from "./BottomTabBar.module.css";

interface TabItem {
  label: string;
  icon: React.ReactNode;
  isActive?: boolean;
}

const tabs: TabItem[] = [
  { label: "Home", icon: "🏠", isActive: true },
  { label: "Menu", icon: "📋" },
  { label: "Cart", icon: "🛒" },
  { label: "Account", icon: "👤" },
];

export const BottomTabBar: React.FC = () => {
  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <div className={styles.inner}>
        {tabs.map((tab) => (
          <button
            key={tab.label}
            type="button"
            className={`${styles.tab} ${
              tab.isActive ? styles.tabActive : ""
            }`}
          >
            <span className={styles.icon}>{tab.icon}</span>
            <span className={styles.label}>{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};
