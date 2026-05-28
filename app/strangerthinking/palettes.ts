// Stranger Thinking — palette pairs
// Drawn from the original Wes Anderson / Ed Ruscha moodboard:
// Bottle Rocket, Rushmore, Tenenbaums, Life Aquatic, Darjeeling,
// Fantastic Mr Fox, Moonrise Kingdom, Budapest, Isle of Dogs, French Dispatch.

export type Palette = { bg: string; text: string };

export const palettes: readonly Palette[] = [
  { bg: "#E8433A", text: "#F5C842" }, // Bottle Rocket red on yellow
  { bg: "#F5C842", text: "#E8433A" }, // Inverse — yellow / red
  { bg: "#4DB89E", text: "#FFFFFF" }, // Life Aquatic teal
  { bg: "#1A1A1A", text: "#E8433A" }, // Isle of Dogs — black / red
  { bg: "#F07B3F", text: "#1A1A1A" }, // Darjeeling orange / black
  { bg: "#8EC5C1", text: "#8B2020" }, // Moonrise teal / oxblood
  { bg: "#FF69B4", text: "#1A1A1A" }, // Budapest pink / black
  { bg: "#4A90D9", text: "#FFFFFF" }, // Tenenbaums blue / white
  { bg: "#2D5A3D", text: "#F5C842" }, // Fantastic Fox green / yellow
  { bg: "#FFFFFF", text: "#1A1A1A" }, // French Dispatch — paper / ink
  { bg: "#1A1A1A", text: "#4DB89E" }, // Black / teal
  { bg: "#4DB89E", text: "#E8433A" }, // Teal / red
  { bg: "#E8433A", text: "#FFFFFF" }, // Red / white
  { bg: "#F5C842", text: "#2D5A3D" }, // Yellow / forest
] as const;
