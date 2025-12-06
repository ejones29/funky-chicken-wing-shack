import React from "react";
import * as pageStyles from "./pages.module.css";

export default function MenuPage() {
  return (
    <>
      <div className={pageStyles.pageWrapper}>
        <h1 className={pageStyles.pageHeading}>Menu</h1>
        <p className={pageStyles.pageSubheading}>Welcome to the Menu page!</p>
      </div>
    </>
  );
}
