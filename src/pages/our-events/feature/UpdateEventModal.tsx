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
import { EventForm } from "../../create-event/feature/EventForm";
import { updateEvent } from "../../../services/AdminServices";

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
            <EventForm
              formType="update"
              formValues={formValues}
              onSubmit={(values) => {
                updateEvent(values as TransformedEventResponse).then(() => {
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
