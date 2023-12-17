import {
  Box,
  Button,
  Flex,
  Input,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { ILocationObj } from "../../model/Interfaces";
import { fetchLocations } from "../../services/MapServices";

interface ISearchInputProps {
  setSelectLocation: (location: ILocationObj) => void;
}

export const SearchInput = (props: ISearchInputProps) => {
  const { setSelectLocation } = props;
  const [searchInput, setSearchInput] = useState<string>("");
  const [listLocations, setListLocations] = useState<ILocationObj[]>([]);

  const handleSearch = (event: FormEvent) => {
    event.preventDefault();
    fetchLocations(searchInput, setListLocations);
  };

  return (
    <>
      <form onSubmit={handleSearch}>
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
          <Button m="1rem" w="10rem" rounded="sm" type="submit">
            Sök
          </Button>
        </Flex>
      </form>
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
