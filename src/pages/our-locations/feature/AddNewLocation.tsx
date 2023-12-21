import { OurForm } from "./OurForm";
import { OurMap } from "./OurMap";

interface AddNewLocation {
  onClose: () => void;
}

export const AddNewLocation = ({ onClose }: AddNewLocation) => {
  return (
    <>
      <OurMap />
      <OurForm onClose={onClose} />
    </>
  );
};
