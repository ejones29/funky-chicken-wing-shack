import React from "react";
import * as styles from "./FlavorCard.module.css";
import { ActionButton } from "../ActionButton/ActionButton";
export interface FlavorCardProps {
  name: string;
  description: string;
  imageUrl: string;
  borderColor?: "pink" | "teal" | "gold" | "purple";
}

export const FlavorCard: React.FC<FlavorCardProps> = ({
  name,
  description,
  imageUrl,
  borderColor = "gold",
}) => {
  return (
    <div className={`${styles.card} ${styles[borderColor]}`}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={name} className={styles.image} />
      </div>
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.desc}>{description}</p>
      <ActionButton label="Order Now" to="/order" as="link" />
    </div>
  );
};
