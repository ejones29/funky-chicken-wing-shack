import React from "react";
import { useState } from "react";
import { graphql } from "gatsby";
import * as pageStyles from "../pages.module.css";
import * as menuPageStyles from "./menu.module.css";
import type { MenuPageProps } from "../../types/menuPage";
import { ActionButton } from "../../components/ActionButton/ActionButton";

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
        price
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

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const filteredMenuItems = selectedCategory
    ? menuItems.filter((item) => item.category?.title === selectedCategory)
    : menuItems;

  return (
    <>
      <div className={pageStyles.pageWrapper}>
        <h1 className={pageStyles.pageHeading}>Menu</h1>
      </div>
      <section>
        <div className={menuPageStyles.categoryFilterSection}>
          <h3>Filter by Category:</h3>
          <div className={menuPageStyles.categoryList}>
            <div className={menuPageStyles.categoryButtons}>
              <button
                className={
                  selectedCategory === null ? menuPageStyles.active : ""
                }
                onClick={() => setSelectedCategory(null)}
              >
                All Categories
              </button>
              {Array.from(
                new Set(
                  menuItems.map((item) => item.category?.title).filter(Boolean)
                )
              ).map((category) => (
                <button
                  key={category}
                  className={
                    selectedCategory === category ? menuPageStyles.active : ""
                  }
                  onClick={() => setSelectedCategory(category as string)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className={menuPageStyles.menuSection}>
        {filteredMenuItems.map((item) => (
          <div key={item.id} className={menuPageStyles.menuItem}>
            <h2>{item.title}</h2>
            {item.description && <p>{item.description}</p>}
            {item.price && <p>${item.price.toFixed(2)}</p>}
            <ActionButton label="Order Now" to="/order" as="link" />
            {/* {item.flavors && item.flavors.length > 0 && (
              <p>
                Flavors:{" "}
                {item.flavors
                  .map(
                    (flavor) =>
                      `${flavor.name} (Heat Level: ${flavor.heatLevel})`
                  )
                  .join(", ")}
              </p>
            )} */}
          </div>
        ))}
      </section>
    </>
  );
}
