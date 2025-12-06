import React from "react";
import * as pageStyles from "./pages.module.css";
import useForm from "../hooks/useForm";
import FlavorSwiper from "../components/FlavorSwiper/FlavorSwiper";

// Note: These images will be replaced by Sanity data later
import BuffaloHotImage from "../assets/images/flavors/buffalo-hot.png";
import BoogieBBQImage from "../assets/images/flavors/boogie-bbq.png";
import ChickenLickinImage from "../assets/images/flavors/honey-mustard.png";
import FunkadelicFireImage from "../assets/images/flavors/funkadelic-fire.png";
import GroovyGarlicImage from "../assets/images/flavors/groovy-garlic.png";
import JivinJerkImage from "../assets/images/flavors/jivin-jerk.png";
import DiscoInfernoImage from "../assets/images/flavors/disco-inferno.png";
import SoulfulSrirachaImage from "../assets/images/flavors/soulful-sriracha.png";
import PsychedelicPineappleImage from "../assets/images/flavors/psychedelic-pineapple.png";

export default function OrderPage() {
  const { values, setValues } = useForm({
    name: "",
    email: "",
  });
  return (
    <>
      <div className={pageStyles.pageWrapper}>
        <h1 className={pageStyles.pageHeading}>Order</h1>
        <form>
          <fieldset>
            <legend>Customer Information</legend>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={values.name || ""}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
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
        {/* ---------------- FLAVOR SWIPER ---------------- */}
        {/* Note: The items prop will be populated with Sanity data later */}

        <FlavorSwiper
          items={[
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
          ]}
        />
      </div>
    </>
  );
}
