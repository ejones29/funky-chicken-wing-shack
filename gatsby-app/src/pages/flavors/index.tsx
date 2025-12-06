import React, { useMemo, useState } from "react";
import * as styles from "./flavors.module.css";
import * as pageStyles from "../pages.module.css";
import { FlavorCard } from "../../components/FlavorCard/FlavorCard";

import BuffaloHotImage from "../../assets/images/flavors/buffalo-hot.png";
import BoogieBBQImage from "../../assets/images/flavors/boogie-bbq.png";
import ChickenLickinImage from "../../assets/images/flavors/honey-mustard.png";
import FunkadelicFireImage from "../../assets/images/flavors/funkadelic-fire.png";
import GroovyGarlicImage from "../../assets/images/flavors/groovy-garlic.png";
import JivinJerkImage from "../../assets/images/flavors/jivin-jerk.png";
import DiscoInfernoImage from "../../assets/images/flavors/disco-inferno.png";
import SoulfulSrirachaImage from "../../assets/images/flavors/soulful-sriracha.png";
import PsychedelicPineappleImage from "../../assets/images/flavors/psychedelic-pineapple.png";

// This will be replaced by Sanity data later
const HEAT_SCALE = [
  { label: "Mild", value: 1 },
  { label: "Warm", value: 2 },
  { label: "Medium", value: 3 },
  { label: "Hot", value: 4 },
  { label: "Blazing", value: 5 },
];

// This will be replaced by Sanity data later
const FLAVORS = [
  {
    name: "Buffalo Hot",
    description: "Classic sauce with a spicy kick",
    imageUrl: BuffaloHotImage,
    borderColor: "gold",
    heat: 3,
    type: "wet",
  },
  {
    name: "Boogie BBQ",
    description: "Smoky goodness with a hint of sweet",
    imageUrl: BoogieBBQImage,
    borderColor: "pink",
    heat: 2,
    type: "wet",
  },
  {
    name: "Chicken Lickin'",
    description: "Honey mustard perfection",
    imageUrl: ChickenLickinImage,
    borderColor: "teal",
    heat: 2,
    type: "wet",
  },
  {
    name: "Funkadelic Fire",
    description: "Turn up the heat and get down!",
    imageUrl: FunkadelicFireImage,
    borderColor: "pink",
    heat: 5,
    type: "wet",
  },
  {
    name: "Groovy Garlic",
    description: "Savory garlic with an herbal flair",
    imageUrl: GroovyGarlicImage,
    borderColor: "teal",
    heat: 2,
    type: "wet",
  },
  {
    name: "Jivin’ Jerk",
    description: "Bold and spicy Caribbean flavor",
    imageUrl: JivinJerkImage,
    borderColor: "gold",
    heat: 3,
    type: "dry",
  },
  {
    name: "Disco Inferno",
    description: "Extremely hot sauce for the daring",
    imageUrl: DiscoInfernoImage,
    borderColor: "purple",
    heat: 5,
    type: "wet",
  },
  {
    name: "Soulful Sriracha",
    description: "Tangy and spicy with a kick",
    imageUrl: SoulfulSrirachaImage,
    borderColor: "purple",
    heat: 4,
    type: "wet",
  },
  {
    name: "Psychedelic Pineapple",
    description: "Sweet and spicy tropical blend",
    imageUrl: PsychedelicPineappleImage,
    borderColor: "pink",
    heat: 1,
    type: "dry",
  },
];

export default function FlavorsPage() {
  // Manage state for heat range
  const [minHeat, setMinHeat] = useState(1);
  const [maxHeat, setMaxHeat] = useState(5);

  // Manage state for flavor type
  const [flavorType, setFlavorType] = useState<"all" | "wet" | "dry">("all");

  // Filter flavor list with all conditions
  const visibleFlavors = useMemo(() => {
    return FLAVORS.filter((flavor) => {
      const withinHeat = flavor.heat >= minHeat && flavor.heat <= maxHeat;
      const matchesType = flavorType === "all" || flavor.type === flavorType;
      return withinHeat && matchesType;
    });
  }, [minHeat, maxHeat, flavorType]);

  return (
    <div className={pageStyles.pageWrapper}>
      <h1 className={pageStyles.pageHeading}>Find Your Flavor</h1>
      <p className={pageStyles.pageSubheading}>
        Gotta have that funk? Turn up the heat and find your flavor groove.
      </p>

      {/* ---------------- HEAT SCALE FILTER ---------------- */}
      <section className={styles.heatScaleSection}>
        <h2>Heat Scale</h2>

        <div className={styles.dualSliderWrapper}>
          {/* MIN SLIDER HANDLE */}
          <div className={`${styles.sliderLayer}`}>
            <input
              type="range"
              min="1"
              max="5"
              value={minHeat}
              onChange={(e) => {
                const value = Number(e.target.value);
                if (value <= maxHeat) setMinHeat(value);
              }}
              className={styles.sliderInput}
            />
          </div>

          {/* MAX SLIDER HANDLE */}
          <div className={`${styles.sliderLayer}`}>
            <input
              type="range"
              min="1"
              max="5"
              value={maxHeat}
              onChange={(e) => {
                const value = Number(e.target.value);
                if (value >= minHeat) setMaxHeat(value);
              }}
              className={styles.sliderInput}
            />
          </div>
        </div>

        <div className={styles.heatLabels}>
          {HEAT_SCALE.map((step) => (
            <span key={step.value}>{step.label}</span>
          ))}
        </div>

        {/* ---------------- WET / DRY TOGGLE ---------------- */}
        <div className={styles.flavorTypeSection}>
          <h2>Flavor Type</h2>

          <div className={styles.typeToggle}>
            <button
              className={flavorType === "all" ? styles.activeToggle : ""}
              onClick={() => setFlavorType("all")}
            >
              All
            </button>
            <button
              className={flavorType === "wet" ? styles.activeToggle : ""}
              onClick={() => setFlavorType("wet")}
            >
              Wet
            </button>
            <button
              className={flavorType === "dry" ? styles.activeToggle : ""}
              onClick={() => setFlavorType("dry")}
            >
              Dry
            </button>
          </div>
        </div>
      </section>

      {/* ---------------- FLAVORS GRID ---------------- */}
      <section>
        <h2>
          Flavors {visibleFlavors.length ? `(${visibleFlavors.length})` : ""}
        </h2>

        {visibleFlavors.length === 0 ? (
          <p>
            No flavors match those filters. Try adjusting the slider or flavor
            type.
          </p>
        ) : (
          <div className={styles.grid}>
            {visibleFlavors.map((flavor) => (
              <FlavorCard
                key={flavor.name}
                name={flavor.name}
                description={flavor.description}
                imageUrl={flavor.imageUrl}
                borderColor={flavor.borderColor as any}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
