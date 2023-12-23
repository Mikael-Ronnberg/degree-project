import { CreateOurLocationFormValues } from "../../../model/AdminInterfaces";
import { submitOurLocation } from "../../../services/AdminServices";
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
