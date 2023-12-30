import { Box, Input, List, ListItem } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { fetchLocations } from "../../../services/MapServices";
import { useLocationStore } from "../../../store/useLocationsStore";
import { SubLocation } from "../../../model/LocationsInterfaces";
import {
  searchDropdownStyles,
  searchInputStyles,
} from "../style/locationStyle";

export const SearchInput = () => {
  const { setSelectLocation, listLocations, setListLocations } =
    useLocationStore();
  const [searchInput, setSearchInput] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchAndFilterLocations = async () => {
      const locations = await fetchLocations(searchInput);
      const filteredLocations = locations.filter(
        (location: SubLocation) => location.address.country === "Sweden"
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
    }, 300);

    return () => clearTimeout(timerId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  return (
    <>
      <Input
        {...searchInputStyles}
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      {isDropdownOpen && (
        <Box {...searchDropdownStyles}>
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