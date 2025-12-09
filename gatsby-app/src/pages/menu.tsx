import React from "react";
import { graphql } from "gatsby";
import * as pageStyles from "./pages.module.css";
import type { MenuPageProps } from "../types/menuPage";

export const query = graphql`
  query MenuPageQuery {
    menuItems: allSanityMenuItem {
      nodes {
        id
        title
        slug {
          current
        }
        description
        category {
          title
        }
        priceOptions {
          label
          price
        }
        flavors {
          name
          heatLevel
        }
        image {
          alt
        }
      }
    }
  }
`;

export default function MenuPage({ data }: MenuPageProps) {
  console.log("Menu Page Data:", data);
  const menuItems = data.menuItems.nodes;
  return (
    <>
      <div className={pageStyles.pageWrapper}>
        <h1 className={pageStyles.pageHeading}>Menu</h1>
        <p className={pageStyles.pageSubheading}>Welcome to the Menu page!</p>
      </div>
      <section className={pageStyles.menuSection}>
        {menuItems.map((item) => (
          <div key={item.id} className={pageStyles.menuItem}>
            <h2>{item.title}</h2>
            {item.description && <p>{item.description}</p>}
            {item.priceOptions && (
              <ul>
                {item.priceOptions.map((option, index) => (
                  <li key={index}>
                    {option.label}: ${option.price.toFixed(2)}
                  </li>
                ))}
              </ul>
            )}
            {item.flavors && item.flavors.length > 0 && (
              <p>
                Flavors:{" "}
                {item.flavors
                  .map(
                    (flavor) =>
                      `${flavor.name} (Heat Level: ${flavor.heatLevel})`
                  )
                  .join(", ")}
              </p>
            )}
          </div>
        ))}
      </section>
    </>
  );
}
