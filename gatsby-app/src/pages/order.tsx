import React from "react";
import { graphql } from "gatsby";
import * as pageStyles from "./pages.module.css";
import useForm from "../hooks/useForm";
import FlavorSwiper from "../components/FlavorSwiper/FlavorSwiper";
import type { FlavorNode } from "../types/flavorPage.ts";
import type { MenuItem } from "../types/sanity";

interface OrderPageData {
  flavors: {
    nodes: FlavorNode[];
  };
  menuItems: {
    nodes: MenuItem[];
  };
}

interface OrderPageProps {
  data: OrderPageData;
}

// Gatsby requires page queries to be defined directly in the page file using the graphql tag.
// The query cannot be imported from another file or Gatsby won't detect it at build time.
export const query = graphql`
  query OrderPageQuery {
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
    menuItems: allSanityMenuItem {
      nodes {
        _id
        title
        description
        category {
          title
        }
        price
      }
    }
  }
`;

export default function OrderPage({ data }: OrderPageProps) {
  const flavors = data.flavors.nodes;
  const menuItems = data.menuItems.nodes;

  // Filter out flavors without icons to match FlavorCardProps type requirements
  const flavorsWithIcons = flavors.filter(
    (flavor): flavor is FlavorNode & { icon: { asset: { url: string } } } =>
      flavor.icon !== undefined
  );

  // Filter menu items by category
  const wings = menuItems.filter(
    (item) => item.category?.title === "Wings By The Piece"
  );
  const sides = menuItems.filter((item) => item.category?.title === "Sides");

  const { values, setValues } = useForm({
    name: "",
    email: "",
    wings: "",
    sides: "",
    flavor: "",
  });

  return (
    <>
      <div className={pageStyles.pageWrapper}>
        <h1 className={pageStyles.pageHeading}>Order</h1>
        <section className={pageStyles.section}>
          <form>
            <fieldset>
              <legend>Select Your Wings</legend>
              <label>
                Wings:
                <select
                  name="wings"
                  value={values.wings || ""}
                  onChange={(e) =>
                    setValues({ ...values, wings: e.target.value })
                  }
                >
                  <option value="">-- Choose a wing option --</option>
                  {wings.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.title} - ${item.price.toFixed(2)}
                    </option>
                  ))}
                </select>
              </label>
            </fieldset>
            <fieldset>
              <legend>Select Your Flavor</legend>
              <label>
                Flavor:
                <select
                  name="flavor"
                  value={values.flavor || ""}
                  onChange={(e) =>
                    setValues({ ...values, flavor: e.target.value })
                  }
                >
                  <option value="">-- Choose a flavor --</option>
                  {flavors.map((flavor) => (
                    <option
                      key={flavor.slug.current}
                      value={flavor.slug.current}
                    >
                      {flavor.name} (Heat Level: {flavor.heatLevel})
                    </option>
                  ))}
                </select>
              </label>
            </fieldset>
            <fieldset>
              <legend>Select Your Sides</legend>
              <label>
                Sides:
                <select
                  name="sides"
                  value={values.sides || ""}
                  onChange={(e) =>
                    setValues({ ...values, sides: e.target.value })
                  }
                >
                  <option value="">-- Choose a side --</option>
                  {sides.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.title} - ${item.price.toFixed(2)}
                    </option>
                  ))}
                </select>
              </label>
            </fieldset>
            <fieldset>
              <legend>Customer Information</legend>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={values.name || ""}
                  onChange={(e) =>
                    setValues({ ...values, name: e.target.value })
                  }
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={values.email || ""}
                  onChange={(e) =>
                    setValues({ ...values, email: e.target.value })
                  }
                />
              </label>
            </fieldset>
            <button type="submit">Place Order</button>
          </form>
        </section>
        <section className={pageStyles.section}>
          {/* ---------------- FLAVOR SWIPER ---------------- */}
          <FlavorSwiper items={flavorsWithIcons} />
        </section>
      </div>
    </>
  );
}
