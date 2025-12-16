import React from "react";
import { useState } from "react";
import DancingMascot, {
  DancePose,
} from "../../components/DancingMascot/DancingMascot";
import * as pageStyles from "../pages.module.css";
import * as partyStyles from "./party.module.css";

export default function PartyPage() {
  const [pose, setPose] = useState<DancePose | null>(null);

  return (
    <div className={pageStyles.pageWrapper}>
      <h1 className={pageStyles.pageHeading}>Let's Boogie</h1>

      <section className={pageStyles.section}>
        <div className={pageStyles.sectionContent}>
          <p className="textCenter">
            Our funky mascot is here to show you some groovy moves.
          </p>
          {/* 🎛 Party Controls */}
          <div className={partyStyles.partyControls}>
            <button onClick={() => setPose("groove")}>Groove</button>
            <button onClick={() => setPose("lean")}>Lean</button>
            <button onClick={() => setPose("spin")}>Spin</button>
            <button onClick={() => setPose("disco")}>Disco</button>
          </div>
          <DancingMascot pose={pose ?? undefined} />
        </div>
      </section>
    </div>
  );
}
