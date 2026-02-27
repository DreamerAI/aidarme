import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges multiple class values into a single string.
 *
 * @param inputs - An array of class values to merge.
 * @returns A string containing the merged class values.
 *
 * @example
 * ```tsx
 * const className = cn("text-red-500", "text-2xl");
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
