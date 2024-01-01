import { useOurLocationsStore } from "../../../store/useOurLocationsStore";
import { HStack, Checkbox } from "@chakra-ui/react";
import { mapCheckboxStyles } from "../style/locationStyle";

export const LocationCheckbox = () => {
  const { setShowLocations } = useOurLocationsStore();

  return (
    <>
      <HStack spacing="3rem">
        <Checkbox
          {...mapCheckboxStyles}
          onChange={(e) => setShowLocations(e.target.checked)}
        >
          Besökta Platser
        </Checkbox>
        {/* <Checkbox {...mapCheckboxStyles}>Senaste Besökta Platser</Checkbox> */}
      </HStack>
    </>
  );
};
