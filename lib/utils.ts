import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// tailwind merge

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// slugify converts a string into a URL-friendly format by making it lowercase and replacing spaces with hyphens.

export function slugify(str: string) {
  return str.toLowerCase().replace(/\s+/g, "-");
}
