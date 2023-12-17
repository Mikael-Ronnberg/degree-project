import {
  Box,
  Button,
  Flex,
  Input,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { useState } from "react";
import { ILocationObj } from "../../model/Interfaces";

const NOMATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";

//   q=135+pilkington+avenue,+birmingham&format=xml&polygon_kml=1&addressdetails=1

// const params = {
//   q: "",
//   format: "json",
//   addressdetails: "addressdetails",
// };

interface ISearchInputProps {
  setSelectLocation: (location: ILocationObj) => void;
}

export const SearchInput = (props: ISearchInputProps) => {
  const { setSelectLocation } = props;
  const [searchInput, setSearchInput] = useState<string>("");
  const [listLocations, setListLocations] = useState<ILocationObj[]>([]);

  const fetchLocations = async () => {
    try {
      const params = new URLSearchParams({
        q: searchInput,
        format: "json",
        addressdetails: "1",
        polygon_geojson: "0",
      });

      const response = await fetch(`${NOMATIM_BASE_URL}${params.toString()}`);
      const result = await response.json();
      setListLocations(result);
    } catch (error) {
      console.error("Error fetching locations:", error);
    }
  };

  return (
    <>
      <Flex w="60vw">
        <Input
          variant="outline"
          border="2px solid black"
          rounded="small"
          m="1rem"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        ></Input>

        <Button m="1rem" w="10rem" rounded="sm" onClick={fetchLocations}>
          Sök
        </Button>
      </Flex>
      <Box>
        <List spacing="3">
          {listLocations.map((item) => {
            return (
              <ListItem
                key={item?.place_id}
                onClick={() => {
                  setSelectLocation(item);
                }}
              >
                <ListIcon as="address" color="blue" />
                {item?.display_name}
              </ListItem>
            );
          })}
        </List>
      </Box>
    </>
  );
};
