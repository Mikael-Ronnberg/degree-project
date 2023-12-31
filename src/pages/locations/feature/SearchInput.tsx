import { Box, Heading, Input, List, Text, ListItem } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { fetchLocations } from "../../../services/MapServices";
import { useLocationStore } from "../../../store/useLocationsStore";
import { SubLocation } from "../../../model/LocationsInterfaces";
import {
  searchDropdownStyles,
  searchInputStyles,
  searchListItemStyles,
} from "../style/locationStyle";

interface SearchInputProps {
  dropColor: string;
}

export const SearchInput = ({ dropColor }: SearchInputProps) => {
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
        setListLocations([]);
        setSelectLocation(null);
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
        id="search"
        aria-label="Input för sökning av plats"
        onChange={(e) => setSearchInput(e.target.value)}
      />
      {isDropdownOpen && (
        <Box {...searchDropdownStyles} background={dropColor}>
          <List>
            {listLocations.map((item) => (
              <ListItem
                {...searchListItemStyles}
                key={item.place_id}
                onClick={() => {
                  setSelectLocation(item);
                  // setListLocations([]);
                  // setSearchInput("");
                  setIsDropdownOpen(false);
                }}
              >
                <Heading fontSize="1rem"> {item.name}</Heading>
                <Text>{item.display_name}</Text>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </>
  );
};
