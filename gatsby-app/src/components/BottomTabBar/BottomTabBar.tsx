import React from "react";
import { Link } from "gatsby";
import * as styles from "./BottomTabBar.module.css";

// react-icons: https://react-icons.github.io/react-icons/search/#q=party
import { HiHome } from "react-icons/hi";
import { FaReceipt } from "react-icons/fa";
import { LuPartyPopper } from "react-icons/lu";

interface TabItem {
  label: string;
  icon: React.ReactNode;
  to: string;
}

const tabs: TabItem[] = [
  { label: "Home", icon: <HiHome />, to: "/" },
  { label: "Order", icon: <FaReceipt />, to: "/order" },
  { label: "Party", icon: <LuPartyPopper />, to: "/party" },
];

export const BottomTabBar: React.FC = () => {
  return (
    <nav className={styles.bottomBarNav} aria-label="Mobile navigation">
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
