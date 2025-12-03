import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { ActionButton } from "../components/ActionButton/ActionButton"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <h1 className="display">
        Get Funky.
        <br />
        <span>Get Saucy.</span>
      </h1>
      <ActionButton
        label="Order Wings"
        icon="🔥"
        variant="teal"
        onClick={() => alert("Action Button Clicked!")}
      />    
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
