import React from "react";
import * as styles from "./ActionButton.module.css";
import { Link } from "gatsby";

export interface ActionButtonProps {
  label: string;
  icon?: React.ReactNode;
  variant?: "pink" | "teal";
  as?: "button" | "a" | "link";
  to?: string; // for Gatsby <Link>
  href?: string; // for <a>
  onClick?: () => void;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  icon,
  variant = "pink",
  as: Component = "button",
  to,
  href,
  onClick,
  ...props
}) => {
  const variantClass = styles[variant] ?? "";

  // Props for the chosen element
  const elementProps: Record<string, any> = {
    className: `${styles.button} ${variantClass}`,
    onClick,
    ...props,
  };

  // Support Gatsby's <Link>
  if (Component === "link" && to) {
    elementProps.to = to;
  }

  // Support <a>
  if (Component === "a" && href) {
    elementProps.href = href;
  }

  const content = (
    <>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{label}</span>
    </>
  );

  if (Component === "link" && to) {
    return (
      <Link {...elementProps} to={to}>
        {content}
      </Link>
    );
  }

  if (Component === "a" && href) {
    return (
      <a {...elementProps} href={href}>
        {content}
      </a>
    );
  }

  return <button {...elementProps}>{content}</button>;
};
