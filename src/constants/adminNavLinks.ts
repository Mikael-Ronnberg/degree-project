import { NavItem } from "../model/GlobalInterfaces";

export const adminNavItems: NavItem[] = [
  {
    label: "Tipsade Platser",
    to: "/subLocations",
    bgColor: "grey",
  },
  {
    label: "Skapa Besökta Platser",
    to: "/ourLocations",
    bgColor: "grey",
  },
  {
    label: "Hantera Besökta Platser",
    to: "/handleOurLocations",
    bgColor: "grey",
  },
  {
    label: "Artiklar",
    to: "/ourArticles",
    bgColor: "grey",
  },
  {
    label: "Skapa Artikel",
    to: "/writeArticle",
    bgColor: "grey",
  },
  {
    label: "Händelser",
    to: "/ourEvents",
    bgColor: "grey",
  },
  {
    label: "Skapa Händelse",
    to: "/createEvents",
    bgColor: "grey",
  },
  {
    label: "Skapa Användare",
    to: "/addUser",
    bgColor: "grey",
  },
];
