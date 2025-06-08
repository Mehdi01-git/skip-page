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
export interface RawSkip {
  id?: string | number;
  size: number;
  vat?: number;
  price_before_vat?: number;
  hire_period_days?: number;
  allowed_on_road?: boolean;
  allows_heavy_waste?: boolean;
  transport_cost?: number;
  per_tonne_cost?: number;
}