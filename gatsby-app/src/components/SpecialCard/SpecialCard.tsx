import React from "react";
import * as styles from "./SpecialCard.module.css";

export interface SpecialCardProps {
  title: string;
  image: string;
  onClick?: () => void;
}

export const SpecialCard: React.FC<SpecialCardProps> = ({
  title,
  image,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={styles.card}
      aria-label={title}
    >
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <p className={styles.title}>{title}</p>
    </button>
  );
};
