import { NavItem } from "../model/GlobalInterfaces";

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
    label: "Hantera våra Platser",
    to: "/handleOurLocations",
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
  {
    label: "Lägg till Ny Användare",
    to: "/addUser",
  },
];
