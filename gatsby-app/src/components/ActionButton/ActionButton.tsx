import React from "react";
import * as styles from "./ActionButton.module.css";

export interface ActionButtonProps {
  label: string;
  icon?: React.ReactNode;
  onClick: () => void;
  variant?: "pink" | "teal";
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  icon,
  onClick,
  variant = "pink",
}) => {
  const variantClass = styles[variant] ?? "";
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${variantClass}`}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{label}</span>
    </button>
  );
};
