import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { ActionButton } from "../components/ActionButton/ActionButton"
import { FeaturedSpecials } from "../components/FeaturedSpecials/FeaturedSpecials"
import { Hero } from "../components/Hero/Hero"
import { ActionButtons } from "../components/ActionButtons/ActionButtons"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      {/* <h1 className="display">
        Get Funky.
        <br />
        <span className="tilted pinkText">Get Saucy.</span>
      </h1> */}
      <Hero />
      <ActionButtons /> 
      <FeaturedSpecials />
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
