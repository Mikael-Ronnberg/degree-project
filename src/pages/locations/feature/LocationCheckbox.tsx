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
          id="ourLocations"
          onChange={(e) => setShowLocations(e.target.checked)}
        >
          Besökta Platser
        </Checkbox>
      </HStack>
    </>
  );
};
