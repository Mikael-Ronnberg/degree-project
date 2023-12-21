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
import { UpdateOurLocationForm } from "./UpdateOurLocationForm";
import { TransformedOurLocationResponse } from "../model/AdminInterfaces";

interface UpdateOurLocationFormProps {
  formValues: TransformedOurLocationResponse;
}

export const EditOurLocationModal = ({
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
            <UpdateOurLocationForm formValues={formValues} onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
