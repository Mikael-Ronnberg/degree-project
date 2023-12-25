import { NavItem } from "../model/GlobalInterfaces";

export const adminNavItems: NavItem[] = [
  {
    label: "Tipsade Platser",
    to: "/subLocations",
  },
  {
    label: "Skapa Besökta Platser",
    to: "/ourLocations",
  },
  {
    label: "Hantera Besökta Platser",
    to: "/handleOurLocations",
  },
  {
    label: "Artiklar",
    to: "/ourArticles",
  },
  {
    label: "Skapa Artikel",
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
  {
    label: "Skapa Användare",
    to: "/addUser",
  },
];
