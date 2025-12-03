import React from "react";
import * as styles from "./FeaturedSpecials.module.css";
import { SpecialCard } from "../SpecialCard/SpecialCard";

interface Special {
  title: string;
  image: string;
}

const specials: Special[] = [
  {
    title: "Boogie BBQ Bucket",
    image: "/images/specials/boogie-bucket.png",
  },
  {
    title: "Funkadelic Fire Wings",
    image: "/images/specials/funk-fire.png",
  },
  {
    title: "Cluckin' Loaded",
    image: "/images/specials/cluck-loaded.png",
  },
];

export const FeaturedSpecials: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.headerRow}>
        <h2 className={styles.heading}>Featured Specials</h2>
        <button type="button" className={styles.viewAllButton}>
          View all
        </button>
      </div>

      <div className={styles.grid}>
        {specials.map((special) => (
          <SpecialCard
            key={special.title}
            title={special.title}
            image={special.image}
          />
        ))}
      </div>
    </section>
  );
};
