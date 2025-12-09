import React from "react";
import { graphql } from "gatsby";
import * as pageStyles from "../pages.module.css";
import * as orderPageStyles from "./order.module.css";
import useForm from "../../hooks/useForm";
import { useOrder } from "../../hooks/useOrder";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import FlavorSwiper from "../../components/FlavorSwiper/FlavorSwiper";
import type { FlavorNode } from "../../types/flavorPage";
import type { MenuItem } from "../../types/sanity";
import { getHeatLevelEmojis } from "../../utils/flavorHelpers";

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

  const { order, addToOrder, removeFromOrder } = useOrder({
    items: menuItems,
    values,
  });

  // Wrapper to remove item from both order and form values
  const handleRemoveItem = (itemId: string) => {
    removeFromOrder(itemId);

    // Clear the corresponding form value
    if (values.wings === itemId) {
      setValues({ ...values, wings: "" });
    } else if (values.flavor === itemId) {
      setValues({ ...values, flavor: "" });
    } else if (values.sides === itemId) {
      setValues({ ...values, sides: "" });
    }
  };

  return (
    <>
      <div className={pageStyles.pageWrapper}>
        <h1 className={pageStyles.pageHeading}>Order</h1>
        <section className={pageStyles.section}>
          <form className={orderPageStyles.orderForm}>
            <div className={orderPageStyles.orderFormGrid}>
              <div className={orderPageStyles.orderOptions}>
                <fieldset>
                  <legend>1. Select Your Wings</legend>
                  <label>
                    Wings Count:
                    <select
                      name="wings"
                      value={values.wings || ""}
                      onChange={(e) => {
                        setValues({ ...values, wings: e.target.value });
                        addToOrder({
                          id: e.target.value,
                          category: "wings",
                          name: "",
                          price: 0,
                          quantity: 1,
                        });
                      }}
                    >
                      <option value="">-- Choose a wing option --</option>
                      {wings.map((item) => (
                        <option key={item._id} value={item._id}>
                          {item.title} - ${item.price.toFixed(2)}
                        </option>
                      ))}
                    </select>
                  </label>

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
                          {flavor.name} {getHeatLevelEmojis(flavor.heatLevel)}
                        </option>
                      ))}
                    </select>
                  </label>
                </fieldset>
                {/* <fieldset>
                  <legend>2. Select Your Flavor</legend>
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
                </fieldset> */}
                <fieldset>
                  <legend>3. Select Your Sides</legend>
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
              </div>
              <div className={orderPageStyles.orderSummary}>
                <fieldset>
                  <legend>Order Summary</legend>
                  <OrderSummary
                    items={[
                      ...(values.wings
                        ? wings
                            .filter((item) => item._id === values.wings)
                            .map((item) => ({
                              id: item._id,
                              category: "wings",
                              name: item.title,
                              quantity: 1,
                              price: item.price,
                            }))
                        : []),
                      ...(values.flavor
                        ? flavors
                            .filter(
                              (flavor) => flavor.slug.current === values.flavor
                            )
                            .map((flavor) => ({
                              id: flavor.slug.current,
                              category: "flavor",
                              name: flavor.name,
                              quantity: 1,
                              price: 0, // Assuming flavor has no additional cost
                            }))
                        : []),
                      ...(values.sides
                        ? sides
                            .filter((item) => item._id === values.sides)
                            .map((item) => ({
                              id: item._id,
                              category: "sides",
                              name: item.title,
                              quantity: 1,
                              price: item.price,
                            }))
                        : []),
                    ]}
                    removeFromOrder={handleRemoveItem}
                  />
                </fieldset>
              </div>
            </div>
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
          <FlavorSwiper items={flavors} />
        </section>
      </div>
    </>
  );
}
