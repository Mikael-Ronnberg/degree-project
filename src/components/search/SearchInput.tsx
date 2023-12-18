import { Box, Flex, Input, List, ListItem } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { fetchLocations } from "../../services/MapServices";
import { useLocationStore } from "../../store/useLocationsStore";
import { ILocationObj } from "../../model/Interfaces";

export const SearchInput = () => {
  const { setSelectLocation, listLocations, setListLocations } =
    useLocationStore();
  const [searchInput, setSearchInput] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchAndFilterLocations = async () => {
      const locations = await fetchLocations(searchInput);
      const filteredLocations = locations.filter(
        (location: ILocationObj) => location.address.country === "Sweden"
      );
      setListLocations(filteredLocations);
    };

    const timerId = setTimeout(() => {
      if (searchInput.length >= 3) {
        fetchAndFilterLocations();
        setIsDropdownOpen(true);
      } else {
        setIsDropdownOpen(false);
      }
    }, 500);

    return () => clearTimeout(timerId);
  }, [searchInput]);

  return (
    <>
      <Flex w="60vw">
        <Input
          variant="outline"
          border="2px solid black"
          rounded="small"
          m="1rem"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </Flex>
      {isDropdownOpen && (
        <Box position="absolute" w="60vw" bg="white" zIndex="dropdown">
          <List>
            {listLocations.map((item) => (
              <ListItem
                key={item.place_id}
                onClick={() => {
                  setSelectLocation(item);
                  setIsDropdownOpen(false);
                }}
              >
                {item.display_name}
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </>
  );
};
