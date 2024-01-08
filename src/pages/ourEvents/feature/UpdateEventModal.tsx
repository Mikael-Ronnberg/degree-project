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
import { TransformedEventResponse } from "../../../model/EventsInterfaces";
import { EventForm } from "../../createEvent/feature/EventForm";
import { updateEvent } from "../../../services/EventServices";
import { useEventsStore } from "../../../store/useEventsStore";
import {
  greySmallButtonStyles,
  modalCloseButtonStyles,
} from "../../../components/buttons/style/buttonStyles";
import { modalStyles, modalHeaderStyles } from "../../admin/style/styleAdmin";

interface UpdateEventFormProps {
  formValues: TransformedEventResponse;
}

export const UpdateEventModal = ({ formValues }: UpdateEventFormProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { updateEventStore } = useEventsStore();
  return (
    <>
      <Button onClick={onOpen} {...greySmallButtonStyles}>
        Uppdatera
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="l">
        <ModalOverlay />
        <ModalContent {...modalStyles}>
          <ModalHeader {...modalHeaderStyles}>Ändra Denna Händelse</ModalHeader>
          <ModalCloseButton {...modalCloseButtonStyles} />
          <ModalBody>
            <EventForm
              formType="update"
              formValues={formValues}
              onSubmit={(values) => {
                updateEvent(values as TransformedEventResponse).then(() => {
                  updateEventStore(values as TransformedEventResponse);
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
