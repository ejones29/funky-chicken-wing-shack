import React from "react";
import * as styles from "./ActionButtons.module.css";
import { ActionButton } from "../../components/ActionButton/ActionButton";
import { Link } from "gatsby";

export const ActionButtons: React.FC = () => {
  return (
    <section className={styles.section} aria-label="Quick actions">
      <div className={styles.grid}>
        <ActionButton
          as={Link}
          label="Find Your Flavor"
          variant="pink"
          icon="🔥"
          to="/flavors"
        />
        <ActionButton
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
        />
      </div>
    </section>
  );
};
