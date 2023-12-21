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
import { TransformedEventResponse } from "../../../model/AdminInterfaces";
import { UpdateEventForm } from "./UpdateEventForm";

interface UpdateEventFormProps {
  formValues: TransformedEventResponse;
}

export const UpdateEventModal = ({ formValues }: UpdateEventFormProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Uppdatera</Button>

      <Modal isOpen={isOpen} onClose={onClose} size="l">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ändra Denna Händelse</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <UpdateEventForm formValues={formValues} onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
