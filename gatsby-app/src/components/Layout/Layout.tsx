import React from "react"
import * as styles from "./Layout.module.css"
import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import { BottomTabBar } from "../BottomTabBar/BottomTabBar"


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className={styles.container}>
        <Header />
        <main>{children}</main>
        <BottomTabBar />
        <Footer />
      </div>
    </main>
  )
}
