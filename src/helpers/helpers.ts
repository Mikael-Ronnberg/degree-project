export interface NavItem {
  label: string;
  to: string;
}

export const adminNavItems: NavItem[] = [
  {
    label: "Tipsade Platser",
    to: "/subLocations",
  },
  {
    label: "Våra Platser",
    to: "/ourLocations",
  },
  {
    label: "Artiklar",
    to: "/ourArticles",
  },
  {
    label: "Skriv Artikel",
    to: "/writeArticle",
  },
  {
    label: "Händelser",
    to: "/ourEvents",
  },
  {
    label: "Skapa Händelse",
    to: "/createEvents",
  },
];
