import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * @typedef {(...inputs: any[]) => string} cn
 */
export function cn(...inputs: any[]): string {
  return twMerge(clsx(inputs));
}
