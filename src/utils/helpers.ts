import { CONTACT_COLORS } from "../constants/constants";

export function getRandomContactColor() {
  const randomIndex = Math.floor(Math.random() * CONTACT_COLORS.length);
  return CONTACT_COLORS[randomIndex];
}
