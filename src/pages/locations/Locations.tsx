import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
} from "@chakra-ui/react";
import { LeafletMap } from "../../components/map/LeafletMap";
import { SearchInput } from "../../components/search/SearchInput";
import { useState } from "react";
import { ILocation, ILocationObj } from "../../model/Interfaces";
import {
  formContainerStyles,
  inputLargeStyles,
  inputSmallStyles,
  mapBoxStyles,
  mapContainerStyles,
  pageContainerStyles,
} from "./style/styleLocations";

export const Locations = () => {
  const [selectLocation, setSelectLocation] = useState<ILocationObj>({
    address: {
      city: "",
      municipality: "",
      county: "",
      country: "",
    },
    addresstype: "",
    boundingbox: [""],
    class: "",
    display_name: "",
    importance: 0,
    lat: "",
    lon: "",
    name: "",
    osm_id: 0,
    osm_type: "",
    place_id: 0,
    place_rank: 0,
    type: "",
  });

  const [pinLocation, setPinLocation] = useState<ILocation | null>(null);

  return (
    <>
      <Flex {...pageContainerStyles}>
        <Flex {...mapContainerStyles}>
          <Heading>Tipsa om en plats! Eller se vart vi snorklat</Heading>
          <Box {...mapBoxStyles}>
            <LeafletMap
              selectLocation={selectLocation}
              setPinLocation={setPinLocation}
            />
          </Box>
          <Box>
            <SearchInput setSelectLocation={setSelectLocation} />
          </Box>
        </Flex>

        <Flex {...formContainerStyles}>
          <FormControl>
            <Flex>
              <Input {...inputSmallStyles} placeholder="Namn (Valfritt)" />
              <Input {...inputSmallStyles} placeholder="Email (Valfritt)" />
              <Input {...inputLargeStyles} placeholder="Meddelande" />
              <Button type="submit">Skicka tipset!</Button>
            </Flex>
          </FormControl>
        </Flex>
      </Flex>
    </>
  );
};
