import React from "react";
import * as styles from "./PageBackground.module.css";

interface PageBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export const PageBackground: React.FC<PageBackgroundProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background} aria-hidden="true" />
      <div className={`${styles.content} ${className}`}>{children}</div>
    </div>
  );
};
