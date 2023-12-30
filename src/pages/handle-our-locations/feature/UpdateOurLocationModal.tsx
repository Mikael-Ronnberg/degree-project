import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { TransformedOurLocationResponse } from "../../../model/LocationsInterfaces";
import { OurLocationForm } from "../../admin/feature/OurLocationForm";
import { updateOurLocation } from "../../../services/MapServices";

interface UpdateOurLocationFormProps {
  formValues: TransformedOurLocationResponse;
}

export const UpdateOurLocationModal = ({
  formValues,
}: UpdateOurLocationFormProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Uppdatera</Button>

      <Modal isOpen={isOpen} onClose={onClose} size="l">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ändra Denna Plats</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <OurLocationForm
              formType="update"
              formValues={formValues}
              onSubmit={(values) => {
                updateOurLocation(
                  values as TransformedOurLocationResponse
                ).then(() => {
                  onClose();
                });
              }}
              onClose={onClose}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
