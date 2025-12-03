import React from "react";
import type { GatsbyBrowser } from "gatsby"
import Layout from "./src/components/Layout/Layout";
import 'normalize.css';
import "./src/styles/global.css"


/**
 * wrapPageElement is an API that allows you to wrap Gatsby page components
 * in a common layout component or add other global elements.
 * It receives the current page element and its props.
 */
export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({ element, props }) => {
  return (
    <Layout {...props}>
      {element}
    </Layout>
  )
}
