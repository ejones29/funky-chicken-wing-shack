/**
 * Returns the border color for a FlavorCard based on the heat level
 * @param heatLevel - The heat level of the flavor (1-5)
 * @returns The border color as a string
 */
export function getBorderColorFromHeatLevel(
  heatLevel: number
): "pink" | "teal" | "gold" | "purple" {
  if (heatLevel === 5) {
    return "pink";
  } else if (heatLevel >= 4) {
    return "gold";
  } else if (heatLevel >= 2) {
    return "purple";
  } else {
    return "teal";
  }
}

/**
 * Returns fire emojis representing the heat level
 * @param heatLevel - The heat level of the flavor (1-5)
 * @returns A string of fire emojis
 */
export function getHeatLevelEmojis(heatLevel: number): string {
  return "🔥".repeat(heatLevel);
}
