import * as React from "react";
import { motion, useAnimation } from "framer-motion";
import * as styles from "./FunkyMascotSvg.module.css";

export const FunkyMascotSvg: React.FC = () => {
  const mascotControls = useAnimation();
  const sunglassesControls = useAnimation();

  // Idle bounce every 10s
  React.useEffect(() => {
    const interval = setInterval(() => {
      mascotControls.start({
        y: [0, -6, 0],
        rotate: [0, -1, 0],
        transition: {
          duration: 0.8,
          ease: "easeInOut",
        },
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [mascotControls]);

  // Sunglasses wiggle (looping)
  React.useEffect(() => {
    sunglassesControls.start({
      rotate: [-4, 4, -4],
      transition: {
        duration: 2.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 4,
      },
    });
  }, [sunglassesControls]);

  // Tap / click dance pose
  const handleTap = async () => {
    await mascotControls.start({
      rotate: [0, 6, -6, 0],
      scale: [1, 1.05, 1],
      transition: { duration: 0.6 },
    });
  };

  return (
    <motion.div
      className={styles.wrapper}
      animate={mascotControls}
      onTap={handleTap}
      onClick={handleTap}
    >
      <svg
        width="100%"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svg}
      >
        {/* BODY */}
        <g id="body">
          <path
            fill="#ffc700"
            stroke="#111111"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="body-fill outline"
            d="M360 380
         C 320 470, 320 600, 390 690
         C 470 790, 610 800, 700 720
         C 780 650, 790 540, 760 460
         C 730 380, 660 330, 580 320
         C 500 310, 400 320, 360 380 Z"
          />
        </g>

        {/* HEAD */}
        <g id="head">
          <path
            fill="#ffc700"
            stroke="#111111"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="body-fill outline"
            d="M420 260
         C 380 300, 370 360, 390 410
         C 420 480, 500 510, 570 490
         C 640 470, 690 420, 690 360
         C 690 310, 660 270, 630 250
         C 580 220, 490 220, 420 260 Z"
          />
        </g>

        {/* COMB */}
        <g id="comb">
          <path
            fill="#ff3f6a"
            stroke="#111111"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="comb-fill outline"
            d="M470 220
         C 460 190, 470 160, 500 150
         C 530 140, 560 150, 570 180
         C 590 160, 620 160, 640 180
         C 660 200, 660 230, 640 250
         C 610 240, 580 240, 560 250
         C 540 230, 510 225, 470 220 Z"
          />
        </g>

        {/* SUNGLASSES */}
        <motion.g
          id="sunglasses"
          animate={sunglassesControls}
          style={{ transformOrigin: "center center" }}
        >
          <rect
            fill="#111111"
            stroke="#111111"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="sunglasses-fill outline"
            x="435"
            y="320"
            width="90"
            height="70"
            rx="18"
          />
          <rect
            fill="#6b46ff"
            className="lens-glow"
            x="445"
            y="330"
            width="70"
            height="50"
            rx="12"
            opacity="0.35"
          />
          {/* Right lens */}
          <rect
            fill="#111111"
            stroke="#111111"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="sunglasses-fill outline"
            x="545"
            y="320"
            width="90"
            height="70"
            rx="18"
          />
          <rect
            fill="#6b46ff"
            className="lens-glow"
            x="555"
            y="330"
            width="70"
            height="50"
            rx="12"
            opacity="0.35"
          />
          {/* Bridge */}
          <rect
            fill="#111111"
            className="sunglasses-fill"
            x="525"
            y="340"
            width="30"
            height="20"
            rx="8"
          />
          {/* Arms hint */}
          <path
            fill="#111111"
            stroke="#111111"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="sunglasses-fill outline"
            d="M430 340 L410 335"
          />
          <path
            fill="#111111"
            stroke="#111111"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="sunglasses-fill outline"
            d="M640 340 L660 335"
          />
        </motion.g>

        {/* BEAK */}
        {/* Upper Beak */}
        <g id="upper-beak">
          <path
            fill="#ff9f45"
            stroke="#111111"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="beak-fill outline"
            d="M620 380
         C 660 390, 700 400, 730 410
         C 710 420, 690 430, 660 438
         C 640 442, 620 440, 610 435
         C 600 425, 605 400, 620 380 Z"
          />
        </g>
        {/* Lower Beak (for mouth open animation) */}
        <g id="lower-beak">
          <path
            fill="#ff9f45"
            stroke="#111111"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="beak-fill outline"
            d="M622 410
         C 650 420, 675 430, 700 445
         C 680 455, 660 462, 640 465
         C 625 468, 615 465, 610 458
         C 605 450, 610 430, 622 410 Z"
          />
        </g>

        {/* NECKLACE */}
        <motion.g
          id="necklace"
          animate={{
            rotate: [-1, 1, -1],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path
            fill="#ffffff"
            stroke="#111111"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="necklace-fill outline"
            d="M450 470
         C 480 500, 520 515, 560 518
         C 600 520, 640 510, 670 490"
          />
          {/* Beads */}
          <circle
            fill="#ffffff"
            stroke="#111111"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="necklace-fill outline"
            cx="470"
            cy="480"
            r="10"
          />
          <circle
            fill="#ffffff"
            stroke="#111111"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="necklace-fill outline"
            cx="500"
            cy="495"
            r="10"
          />
          <circle
            fill="#ffffff"
            stroke="#111111"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="necklace-fill outline"
            cx="530"
            cy="505"
            r="10"
          />
          <circle
            fill="#ffffff"
            stroke="#111111"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="necklace-fill outline"
            cx="560"
            cy="510"
            r="10"
          />
          <circle
            fill="#ffffff"
            stroke="#111111"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="necklace-fill outline"
            cx="590"
            cy="505"
            r="10"
          />
          <circle
            fill="#ffffff"
            stroke="#111111"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="necklace-fill outline"
            cx="620"
            cy="495"
            r="10"
          />
          <circle
            fill="#ffffff"
            stroke="#111111"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="necklace-fill outline"
            cx="650"
            cy="480"
            r="10"
          />
        </motion.g>

        {/* WINGS */}
        <motion.g
          id="left-wing"
          animate={{ rotate: [-3, 3, -3] }}
          transition={{ duration: 2.2, repeat: Infinity }}
          style={{ transformOrigin: "right center" }}
        >
          <path
            fill="#ffc700"
            stroke="#111111"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="body-fill outline"
            d="M370 430
         C 320 430, 300 470, 310 520
         C 320 570, 360 600, 400 600
         C 390 570, 390 540, 395 510
         C 400 480, 390 455, 370 430 Z"
          />
        </motion.g>
        <motion.g
          id="right-wing"
          animate={{ rotate: [3, -3, 3] }}
          transition={{ duration: 2.2, repeat: Infinity }}
          style={{ transformOrigin: "left center" }}
        >
          <path
            fill="#ffc700"
            stroke="#111111"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="body-fill outline"
            d="M690 440
         C 720 430, 755 440, 775 470
         C 795 500, 800 540, 785 575
         C 765 570, 745 560, 730 545
         C 715 530, 705 510, 700 490
         C 695 470, 692 455, 690 440 Z"
          />
        </motion.g>

        {/* LEGS */}
        <g id="left-leg">
          <path
            fill="#ff9f45"
            stroke="#111111"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="leg-fill outline"
            d="M470 690
         L 460 770
         L 450 800"
          />
          <path
            fill="#ff9f45"
            stroke="#111111"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="leg-fill outline"
            d="M450 800
         L 430 820
         M450 800
         L 470 820"
          />
        </g>

        <g id="right-leg">
          <path
            fill="#ff9f45"
            stroke="#111111"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="leg-fill outline"
            d="M580 690
         L 585 770
         L 590 800"
          />
          <path
            fill="#ff9f45"
            stroke="#111111"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="leg-fill outline"
            d="M590 800
         L 570 820
         M590 800
         L 610 820"
          />
        </g>
      </svg>
    </motion.div>
  );
};
export default FunkyMascotSvg;
