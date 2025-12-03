import React from "react"
import * as styles from "./Layout.module.css"
import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className={styles.container}>
        <NavBar />
        <header>
          <h1>Funky Chicken Wing Shack</h1>
        </header>
        <main>{children}</main>
        <Footer />
      </div>
    </main>
  )
}
