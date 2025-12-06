import React, { useState } from "react";
import * as styles from "./FunkyMascot.module.css";

interface FunkyMascotProps {
  imageSrc: string; // Pass your mascot PNG/SVG
  alt?: string;
}

export const FunkyMascot: React.FC<FunkyMascotProps> = ({
  imageSrc,
  alt = "Funky Chicken Mascot",
}) => {
  const [isDancing, setIsDancing] = useState(false);

  const triggerDance = () => {
    if (isDancing) return; // Prevent animation overlap
    setIsDancing(true);
    setTimeout(() => setIsDancing(false), 1000); // match duration of dance animation (.dance .image)
  };

  return (
    <div
      className={`${styles.wrapper} ${isDancing ? styles.dance : styles.idle}`}
      onClick={triggerDance}
      role="button"
      aria-label="Funky Chicken Mascot (interactive)"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && triggerDance()}
    >
      <img src={imageSrc} alt={alt} className={styles.image} />
    </div>
  );
};
