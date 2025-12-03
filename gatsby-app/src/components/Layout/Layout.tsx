import React from "react"
import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className="container">
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
