import React, { useMemo, useState } from 'react'

const HEAT_SCALE = [
  { label: 'Mild', value: 1 },
  { label: 'Warm', value: 2 },
  { label: 'Medium', value: 3 },
  { label: 'Hot', value: 4 },
  { label: 'Blazing', value: 5 },
]

const FLAVORS = [
  { name: 'Lemon Pepper', heat: 1, description: 'Citrus zest with cracked pepper bite.' },
  { name: 'Garlic Parmesan', heat: 2, description: 'Creamy garlic with parmesan finish.' },
  { name: 'Honey BBQ', heat: 2, description: 'Sweet, smoky, and crowd friendly.' },
  { name: 'Cajun Kick', heat: 3, description: 'Herby rub with creeping warmth.' },
  { name: 'Mango Habanero', heat: 4, description: 'Tropical sweetness that turns up the heat.' },
  { name: 'Inferno Blaze', heat: 5, description: 'Scorching pepper blend for heat seekers.' },
]

export default function FlavorsPage() {
  const [maxHeat, setMaxHeat] = useState(HEAT_SCALE[HEAT_SCALE.length - 1].value)
  const visibleFlavors = useMemo(
    () => FLAVORS.filter(flavor => flavor.heat <= maxHeat),
    [maxHeat]
  )
  const currentHeatLabel =
    HEAT_SCALE.find(step => step.value === maxHeat)?.label ?? HEAT_SCALE[HEAT_SCALE.length - 1].label

  return (
    <>
      <h1>Find Your Flavor</h1>
      <p>Kick up the flavor on any of our classic wings
boneless wings, or crispy tenders!</p>
      <section>
        <h2>Heat Scale</h2>
        <p>Showing flavors up to: <strong>{currentHeatLabel}</strong></p>
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
          <ul>
            {visibleFlavors.map(flavor => (
              <li key={flavor.name}>
                <strong>{flavor.name}</strong> — {flavor.description}
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  )
}
