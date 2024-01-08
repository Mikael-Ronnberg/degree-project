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
import {
  greySmallButtonStyles,
  modalCloseButtonStyles,
} from "../../../components/buttons/style/buttonStyles";
import { modalHeaderStyles, modalStyles } from "../../admin/style/styleAdmin";

interface UpdateOurLocationFormProps {
  formValues: TransformedOurLocationResponse;
}

export const UpdateOurLocationModal = ({
  formValues,
}: UpdateOurLocationFormProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} {...greySmallButtonStyles}>
        Uppdatera
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="l">
        <ModalOverlay />
        <ModalContent {...modalStyles}>
          <ModalHeader {...modalHeaderStyles}>Ändra Denna Plats</ModalHeader>
          <ModalCloseButton {...modalCloseButtonStyles} />
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
