import React from "react";
import { graphql } from "gatsby";
import * as pageStyles from "./pages.module.css";
import useForm from "../hooks/useForm";
import FlavorSwiper from "../components/FlavorSwiper/FlavorSwiper";
import type { FlavorsPageProps } from "../types/flavor";

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

export default function OrderPage({ data }: FlavorsPageProps) {
  const flavors = data.flavors.nodes;

  const { values, setValues } = useForm({
    name: "",
    email: "",
  });
  return (
    <>
      <div className={pageStyles.pageWrapper}>
        <h1 className={pageStyles.pageHeading}>Order</h1>
        <section className={pageStyles.section}>
          <form>
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
            <fieldset>
              <legend>Select Your Wings</legend>
            </fieldset>
            <fieldset>
              <legend>Select Your Sides</legend>
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
