import React from "react";
import * as styles from "./FlavorCard.module.css";
import { ActionButton } from "../ActionButton/ActionButton";
import { getHeatLevelEmojis } from "../../utils/flavorHelpers";
export interface FlavorCardProps {
  name: string;
  description: string;
  heatLevel: number;
  icon?: {
    asset: {
      url: string;
    };
  };
  borderColor?: "pink" | "teal" | "gold" | "purple";
}

export const FlavorCard: React.FC<FlavorCardProps> = ({
  name,
  description,
  heatLevel,
  icon,
  borderColor = "gold",
}) => {
  return (
    <div className={`${styles.card} ${styles[borderColor]}`}>
      <div className={styles.imageWrapper}>
        {icon && (
          <img src={icon.asset.url} alt={name} className={styles.image} />
        )}
      </div>
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.heatLevel}>{getHeatLevelEmojis(heatLevel) || ""}</p>
      <p className={styles.desc}>{description}</p>
      <ActionButton label="Order Now" to="/order" as="link" />
    </div>
  );
};
