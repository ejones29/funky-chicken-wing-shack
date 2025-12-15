import React from "react";
import * as styles from "./Layout.module.css";
import { PageBackground } from "../PageBackground/PageBackground";
// import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { BottomTabBar } from "../BottomTabBar/BottomTabBar";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function Layout({ children }: { children: React.ReactNode }) {
  const isTabletBp = useMediaQuery("(min-width: 768px)");
  return (
    <main>
      <PageBackground>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <Header />
            {children}
          </div>
        </div>

        {!isTabletBp && <BottomTabBar />}
        {/* <Footer /> */}
      </PageBackground>
    </main>
  );
}
