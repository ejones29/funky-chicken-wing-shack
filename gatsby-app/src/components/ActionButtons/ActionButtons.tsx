import React from "react";
import * as styles from "./ActionButtons.module.css";
import { ActionButton } from "../../components/ActionButton/ActionButton";

export const ActionButtons: React.FC = () => {
  return (
    <section className={styles.section} aria-label="Quick actions">
      <div className={styles.grid}>
        <ActionButton
          label="Order Now"
          icon="🍗"
          variant="teal"
          as="link"
          to="/order"
        />
        <ActionButton
          label="Find Your Flavor"
          icon="🔥"
          variant="pink"
          as="link"
          to="/flavors"
        />
        <ActionButton
          label="Let's Party"
          icon="🕺"
          variant="teal"
          as="link"
          to="/party"
        />
        {/* <ActionButton
          label="Add Brews"
          variant="teal"
          onClick={() => {}}
          icon="🍺"
        /> */}
        {/* <ActionButton
          label="Track My Order"
          variant="teal"
          onClick={() => {}}
          icon="🛵"
        /> */}
      </div>
    </section>
  );
};
