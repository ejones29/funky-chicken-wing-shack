import React, { useMemo, useState } from "react";
import { graphql } from "gatsby";
import * as styles from "./flavors.module.css";
import * as pageStyles from "../pages.module.css";
import { FlavorCard } from "../../components/FlavorCard/FlavorCard";
import type { FlavorsPageProps } from "../../types/flavor";
import { getBorderColorFromHeatLevel } from "../../utils/flavorHelpers";

// This will be replaced by Sanity data later
const HEAT_SCALE = [
  { label: "Mild", value: 1 },
  { label: "Warm", value: 2 },
  { label: "Medium", value: 3 },
  { label: "Hot", value: 4 },
  { label: "Blazing", value: 5 },
];

// Gatsby requires page queries to be defined directly in the page file using the graphql tag.
// The query cannot be imported from another file or Gatsby won't detect it at build time.
export const query = graphql`
  query FlavorsQuery {
    flavors: allSanityFlavor {
      nodes {
        name
        heatLevel
        description
        type
        tags
        slug {
          current
        }
        icon {
          asset {
            url
          }
        }
      }
    }
  }
`;

export default function FlavorsPage({ data }: FlavorsPageProps) {
  // Manage state for heat range
  const [minHeat, setMinHeat] = useState(1);
  const [maxHeat, setMaxHeat] = useState(5);

  // Manage state for flavor type
  const [flavorType, setFlavorType] = useState<"all" | "wet" | "dry">("all");
  const flavors = data.flavors.nodes;

  // Filter flavor list with all conditions
  const visibleFlavors = useMemo(() => {
    return flavors.filter((flavor) => {
      const withinHeat =
        flavor.heatLevel >= minHeat && flavor.heatLevel <= maxHeat;
      const matchesType = flavorType === "all" || flavor.type === flavorType;
      const hasIcon = flavor.icon !== undefined;
      return withinHeat && matchesType && hasIcon;
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
                heatLevel={flavor.heatLevel}
                icon={flavor.icon ? flavor.icon : { asset: { url: "🕺" } }}
                borderColor={getBorderColorFromHeatLevel(flavor.heatLevel)}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
