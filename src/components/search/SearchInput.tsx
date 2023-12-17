import { Box, Flex, Input, List, ListItem } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { ILocationObj } from "../../model/Interfaces";
import { fetchLocations } from "../../services/MapServices";

interface ISearchInputProps {
  setSelectLocation: (location: ILocationObj) => void;
}

export const SearchInput = (props: ISearchInputProps) => {
  const { setSelectLocation } = props;
  const [searchInput, setSearchInput] = useState<string>("");
  const [listLocations, setListLocations] = useState<ILocationObj[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (searchInput.length >= 3) {
        fetchLocations(searchInput, setListLocations);
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
