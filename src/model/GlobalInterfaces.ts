export interface NavItem {
  label: string;
  to: string;
  bgColor: string;
}

export interface Totals {
  totalPlastic: number;
  totalMetal: number;
  totalGlass: number;
  totalOther: number;
  totalAnimals: number;
}

export interface TempDisplayTotal {
  label: string;
  heading: string;
  total: number;
  description: string;
  article?: string;
}
