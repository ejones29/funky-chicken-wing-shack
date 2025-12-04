import React from "react"
import * as styles from "./Layout.module.css"
import { NavWrapper} from "../NavWrapper/NavWrapper"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className={styles.container}>
        <div className="content">
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    </main>
  )
}
