import { NavItem } from "../model/GlobalInterfaces";

export const adminNavItems: NavItem[] = [
  {
    label: "Platser",
    to: "/ourLocations",
    bgColor: "grey",
  },

  {
    label: "Artiklar",
    to: "/writeArticle",
    bgColor: "grey",
  },
  {
    label: "Händelser",
    to: "/createEvents",
    bgColor: "grey",
  },
  {
    label: "Användare",
    to: "/addUser",
    bgColor: "grey",
  },
];
