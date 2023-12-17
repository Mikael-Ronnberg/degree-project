import { Box, Flex, Heading } from "@chakra-ui/react";
import { LeafletMap } from "../components/map/LeafletMap";
import { SearchInput } from "../components/search/SearchInput";
import { useState } from "react";
import { ILocation, ILocationObj } from "../model/Interfaces";

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

  console.log(pinLocation);

  return (
    <>
      <h2>Location</h2>
      <Flex w="100vw" h="100vh" justify="center" align="center">
        <Flex
          justify="center"
          align="center"
          w="90vw"
          h="80vh"
          border="black 2px solid"
          direction="column"
        >
          <Heading>Set a Location</Heading>
          <Box border="black 2px solid" w="60vw" h="60vh">
            <LeafletMap
              selectLocation={selectLocation}
              setPinLocation={setPinLocation}
            />
          </Box>
          <Box>
            <SearchInput setSelectLocation={setSelectLocation} />
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
