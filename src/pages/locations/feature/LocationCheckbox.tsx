import { useEffect, useState } from "react";
import { useOurLocationsStore } from "../../../store/useOurLocationsStore";
import { getOurLocations } from "../../../services/MapServices";
import { HStack, Checkbox } from "@chakra-ui/react";
import { mapCheckboxStyles } from "../style/locationStyle";

export const LocationCheckbox = () => {
  const { ourLocations, setOurLocations } = useOurLocationsStore();
  const [isOurLocationsChecked, setIsOurLocationChecked] = useState(false);

  useEffect(() => {
    if (isOurLocationsChecked) {
      const fetchOurLocations = async () => {
        if (ourLocations.length === 0) {
          const locations = await getOurLocations();
          setOurLocations(locations);
        }
      };
      fetchOurLocations();
    }
  }, [isOurLocationsChecked]);

  return (
    <>
      <HStack spacing="3rem">
        <Checkbox
          {...mapCheckboxStyles}
          onChange={(e) => setIsOurLocationChecked(e.target.checked)}
        >
          Besökta Platser
        </Checkbox>
        <Checkbox {...mapCheckboxStyles}>Senaste Besökta Platser</Checkbox>
      </HStack>
    </>
  );
};
