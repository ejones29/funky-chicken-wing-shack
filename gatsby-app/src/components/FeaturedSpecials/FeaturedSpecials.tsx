import React from "react";
import * as styles from "./FeaturedSpecials.module.css";
import { SpecialCard } from "../SpecialCard/SpecialCard";
import BoogieBBQBucket from "../../assets/images/boogie-bbq-bucket.png";
import FunkadelicFireWings from "../../assets/images/funkadelic-fire-wings.png";
import CluckinLoadedFries from "../../assets/images/cluckin-loaded-fries.png";
interface Special {
  title: string;
  image: string;
}

const specials: Special[] = [
  {
    title: "Boogie BBQ Bucket",
    image: BoogieBBQBucket,
  },
  {
    title: "Funkadelic Fire Wings",
    image: FunkadelicFireWings,
  },
  {
    title: "Cluckin' Loaded Fries",
    image: CluckinLoadedFries,
  },
];

export const FeaturedSpecials: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.headerRow}>
        <h2 className={styles.heading}>Featured Specials</h2>
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
