import React from "react";
import { useState, useEffect, useRef } from "react";
import DancingMascot, {
  DancePose,
} from "../../components/DancingMascot/DancingMascot";
import * as pageStyles from "../pages.module.css";
import * as partyStyles from "./party.module.css";
import ChickenWingBeatAudio from "../../assets/audio/chicken-wing-beat.mp3";

export default function PartyPage() {
  const [pose, setPose] = useState<DancePose | null>(null);
  const [poseTrigger, setPoseTrigger] = useState(0);
  const [activePose, setActivePose] = useState<DancePose | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(ChickenWingBeatAudio);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.6;

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  const playPose = (pose: DancePose) => {
    setPose(pose);
    setPoseTrigger((t) => t + 1);
    setActivePose(pose);
    if (pose === "disco") {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
      audioRef.current!.currentTime = 0;
    }
  };
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
            <button
              className={activePose === "groove" ? partyStyles.active : ""}
              onClick={() => playPose("groove")}
            >
              Groove
            </button>
            <button
              className={activePose === "lean" ? partyStyles.active : ""}
              onClick={() => playPose("lean")}
            >
              Lean
            </button>
            <button
              className={activePose === "spin" ? partyStyles.active : ""}
              onClick={() => playPose("spin")}
            >
              Spin
            </button>
            <button
              className={activePose === "disco" ? partyStyles.activeDisco : ""}
              onClick={() => playPose("disco")}
            >
              Disco
            </button>
          </div>
          <DancingMascot
            pose={pose ?? undefined}
            trigger={poseTrigger}
            isPlayingMusic={activePose === "disco"}
          />
        </div>
      </section>
    </div>
  );
}
