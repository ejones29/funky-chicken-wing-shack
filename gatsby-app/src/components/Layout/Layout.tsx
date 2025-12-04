import React from "react"
import * as styles from "./Layout.module.css"
import { PageBackground } from "../PageBackground/PageBackground"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <PageBackground>
      <div className={styles.container}>
        <div className="content">
          <Header />
          {children}
          <Footer />
        </div>
      </div>
      </PageBackground> 
    </main>
  )
}
