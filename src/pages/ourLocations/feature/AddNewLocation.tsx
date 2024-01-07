import { CreateOurLocationFormValues } from "../../../model/LocationsInterfaces";
import { submitOurLocation } from "../../../services/MapServices";
import { useLocationStore } from "../../../store/useLocationsStore";
import { OurLocationForm } from "../../admin/feature/OurLocationForm";
import { OurMap } from "./OurMap";

interface AddNewLocation {
  onClose: () => void;
}

export const AddNewLocation = ({ onClose }: AddNewLocation) => {
  const { setPinLocation } = useLocationStore();
  return (
    <>
      <OurMap />
      <OurLocationForm
        formType="create"
        onSubmit={(values, { resetForm }) => {
          submitOurLocation(values as CreateOurLocationFormValues).then(() => {
            setPinLocation(null);
            resetForm();
            onClose();
          });
        }}
        onClose={onClose}
      />
    </>
  );
};
