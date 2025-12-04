import React, { useMemo, useState } from 'react'
import { FlavorCard} from '../components/FlavorCard/FlavorCard'

import BuffaloHotImage from '../assets/images/flavors/buffalo-hot.png'
import BoogieBBQImage from '../assets/images/flavors/boogie-bbq.png'
import ChickenLickinImage from '../assets/images/flavors/honey-mustard.png'
import FunkadelicFireImage from '../assets/images/flavors/funkadelic-fire.png'
import GroovyGarlicImage from '../assets/images/flavors/groovy-garlic.png'
import JivinJerkImage from '../assets/images/flavors/jivin-jerk.png'
import DiscoInfernoImage from '../assets/images/flavors/disco-inferno.png'
import SoulfulSrirachaImage from '../assets/images/flavors/soulful-sriracha.png'
import PsychedelicPineappleImage from '../assets/images/flavors/psychedelic-pineapple.png'

const HEAT_SCALE = [
  { label: 'Mild', value: 1 },
  { label: 'Warm', value: 2 },
  { label: 'Medium', value: 3 },
  { label: 'Hot', value: 4 },
  { label: 'Blazing', value: 5 },
]

// const FLAVORS = [
//   { name: 'Lemon Pepper', heat: 1, description: 'Citrus zest with cracked pepper bite.' },
//   { name: 'Garlic Parmesan', heat: 2, description: 'Creamy garlic with parmesan finish.' },
//   { name: 'Honey BBQ', heat: 2, description: 'Sweet, smoky, and crowd friendly.' },
//   { name: 'Cajun Kick', heat: 3, description: 'Herby rub with creeping warmth.' },
//   { name: 'Mango Habanero', heat: 4, description: 'Tropical sweetness that turns up the heat.' },
//   { name: 'Inferno Blaze', heat: 5, description: 'Scorching pepper blend for heat seekers.' },
// ]

// This will be replaced by Sanity data later
const FLAVORS = [
  {
    name: "Buffalo Hot",
    description: "Classic sauce with a spicy kick",
    imageUrl: BuffaloHotImage,
    borderColor: "gold",
    heat: 3,
  },
  {
    name: "Boogie BBQ",
    description: "Smoky goodness with a hint of sweet",
    imageUrl: BoogieBBQImage,
    borderColor: "pink",
    heat: 2,
  },
  {
    name: "Chicken Lickin'",
    description: "Honey mustard perfection",
    imageUrl: ChickenLickinImage,
    borderColor: "teal",
    heat: 2,
  },
  {
    name: "Funkadelic Fire",
    description: "Turn up the heat and get down!",
    imageUrl: FunkadelicFireImage,
    borderColor: "pink",
    heat: 4,
  },
  {
    name: "Groovy Garlic",
    description: "Savory garlic with an herbal flair",
    imageUrl: GroovyGarlicImage,
    borderColor: "teal",
    heat: 2,
  },
  {
    name: "Jivin’ Jerk",
    description: "Bold and spicy Caribbean flavor",
    imageUrl: JivinJerkImage,
    borderColor: "gold",
    heat: 3,
  },
  {
    name:"Disco Inferno",
    description:"Extremely hot sauce for the daring",
    imageUrl:DiscoInfernoImage,
    borderColor:"purple",
    heat:5,
  },
  { 
    name:"Soulful Sriracha",
    description:"Tangy and spicy with a kick",
    imageUrl:SoulfulSrirachaImage,
    borderColor:"purple",
    heat:4,
  },
  { 
    name:"Psychedelic Pineapple",
    description:"Sweet and spicy tropical blend",
    imageUrl:PsychedelicPineappleImage,
    borderColor:"pink",
    heat:3,
  },
];

export default function FlavorsPage() {
  const [maxHeat, setMaxHeat] = useState(HEAT_SCALE[HEAT_SCALE.length - 1].value)
  const visibleFlavors = useMemo(
    () => FLAVORS.filter(flavor => flavor.heat <= maxHeat),
    [maxHeat]
  )
  const currentHeatLabel =
    HEAT_SCALE.find(step => step.value === maxHeat)?.label ?? HEAT_SCALE[HEAT_SCALE.length - 1].label

  return (
    <div className="pageWrapper">
        <h1 className="pageHeading">Find Your Flavor</h1>
      <p className="textCenter">Kick up the flavor on any of our classic wings, boneless wings, or crispy tenders!</p>
      <section className={"heatScaleSection"}>
        <h2>Heat Scale</h2>
        <p className="textCenter">Showing flavors up to: <strong>{currentHeatLabel}</strong></p>
        <input
          type="range"
          min={HEAT_SCALE[0].value}
          max={HEAT_SCALE[HEAT_SCALE.length - 1].value}
          value={maxHeat}
          onChange={event => setMaxHeat(Number(event.target.value))}
          style={{ width: '100%' }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
          {HEAT_SCALE.map(step => (
            <span key={step.value}>{step.label}</span>
          ))}
        </div>
      </section>

      <section>
        <h2>Flavors</h2>
        {visibleFlavors.length === 0 ? (
          <p>No flavors match that heat level. Try sliding the scale hotter.</p>
        ) : (
          <div className="grid">
            {visibleFlavors.map(flavor => (
               <FlavorCard
              key={flavor.name}
              name={flavor.name}
              description={flavor.description}
              imageUrl={flavor.imageUrl}
              borderColor={flavor.borderColor as any}
            />
      
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
