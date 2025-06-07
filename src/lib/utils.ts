import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type Skip = {
  id: string;
  image: string;
  name: string;
  size: string;
  price: number;
  hire_period: number;
  popularity: number;
  savings?: number;
  isRecommended?: boolean;
  allowedOnRoad?: boolean;
  allowsHeavyWaste?: boolean;
  transportCost?: number;
  perTonneCost?: number;
  features: string[];
};
