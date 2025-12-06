import React from "react";
import * as styles from "./ActionButtons.module.css";
import { ActionButton } from "../../components/ActionButton/ActionButton";

export const ActionButtons: React.FC = () => {
  return (
    <section className={styles.section} aria-label="Quick actions">
      <div className={styles.grid}>
        <ActionButton
          as="link"
          label="Order Now"
          variant="teal"
          to="/order"
          icon="🍗"
        />
        <ActionButton
          as="link"
          label="Find Your Flavor"
          variant="pink"
          to="/flavors"
          icon="🔥"
        />
        {/* <ActionButton
          label="Meal Combos"
          variant="pink"
          onClick={() => {}}
          icon="🍽️"
        />
        <ActionButton
          label="Add Brews"
          variant="teal"
          onClick={() => {}}
          icon="🍺"
        />
        <ActionButton
          label="Track My Order"
          variant="teal"
          onClick={() => {}}
          icon="🛵"
        /> */}
      </div>
    </section>
  );
};
