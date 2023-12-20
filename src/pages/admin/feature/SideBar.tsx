import { List, ListItem, VStack } from "@chakra-ui/react";
import { sideBarListStyle, sideBarStyles } from "../style/styleAdmin";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <>
      <VStack {...sideBarStyles}>
        <List>
          <Link to="/sublocations">
            <ListItem {...sideBarListStyle}>Tipsade platser</ListItem>
          </Link>
          <Link to="/ourlocations">
            <ListItem {...sideBarListStyle}>Våra besökta Platser</ListItem>
          </Link>
          <Link to="events">
            <ListItem {...sideBarListStyle}>Kommande Händelser</ListItem>
          </Link>
          <Link to="ourarticles">
            <ListItem {...sideBarListStyle}>Artiklar</ListItem>
          </Link>
        </List>
      </VStack>
    </>
  );
};
