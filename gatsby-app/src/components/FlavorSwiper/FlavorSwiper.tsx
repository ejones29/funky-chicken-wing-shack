import React, { useRef, useState, useMemo } from "react";
import * as styles from "./FlavorSwiper.module.css";
import { FlavorCard } from "../FlavorCard/FlavorCard";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import type { FlavorCardProps } from "../FlavorCard/FlavorCard";
interface FlavorSwiperProps {
  title?: string;
  subtitle?: string;
  items: Array<FlavorCardProps>;
  maxHeat?: number;
}

export default function FlavorSwiper({
  title = "Find Your Flavor",
  subtitle = "Explore flavors that range from mild to wild.",
  items,
  maxHeat: initialMaxHeat = 5,
}: FlavorSwiperProps) {
  const [maxHeat, setMaxHeat] = useState(initialMaxHeat);
  const trackRef = useRef<HTMLDivElement>(null);

  const filteredItems = useMemo(
    () => items.filter((item) => item.heatLevel <= maxHeat),
    [maxHeat, items]
  );

  const scrollLeft = () => {
    trackRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    trackRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subtitle}>{subtitle}</p>

      {/* Heat Slider */}
      <div className={styles.sliderWrapper}>
        <input
          type="range"
          min={1}
          max={5}
          value={maxHeat}
          onChange={(e) => setMaxHeat(Number(e.target.value))}
          className={styles.slider}
        />

        <div className={styles.sliderLabels}>
          <span>No Heat</span>
          <span>Some Heat</span>
          <span>🔥 All Heat</span>
        </div>
      </div>

      {/* Scroll Snap Swiper */}
      <div className={styles.swiperContainer}>
        <button
          className={styles.arrowLeft}
          onClick={scrollLeft}
          aria-label="Previous"
        >
          <FaAngleLeft />
        </button>

        <div ref={trackRef} className={styles.track}>
          {filteredItems.map((item) => (
            <div key={item.name} className={styles.slide}>
              <FlavorCard {...item} />
            </div>
          ))}
        </div>

        <button
          className={styles.arrowRight}
          onClick={scrollRight}
          aria-label="Next"
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
}
