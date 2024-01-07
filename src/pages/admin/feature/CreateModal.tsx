import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { AddNewLocation } from "../../ourLocations/feature/AddNewLocation";
import { ArticleForm } from "../../write-articles/feature/ArticleForm";
import { AddUserForm } from "../../add-user/feature/AddUserForm";
import { EventForm } from "../../create-event/feature/EventForm";
import {
  CreateEventFormValues,
  TransformedEventResponse,
} from "../../../model/EventsInterfaces";
import { submitEvent } from "../../../services/EventServices";
import { useEventsStore } from "../../../store/useEventsStore";
import {
  createModalBodyStyles,
  createModalHeaderStyles,
  createModalStyles,
} from "../style/styleAdmin";
import { modalCloseButtonStyles } from "../../../components/buttons/style/buttonStyles";

interface CreateModalProps {
  buttonLabel: string;
  modalHeader: string;
  mode: string;
}

export const CreateModal = ({
  buttonLabel,
  modalHeader,
  mode,
}: CreateModalProps) => {
  const { setSingleEvent } = useEventsStore();

  const renderComponent = (mode: string) => {
    switch (mode) {
      case "event":
        return (
          <EventForm
            formType="create"
            onSubmit={(values, { resetForm }) => {
              submitEvent(values as CreateEventFormValues).then(() => {
                setSingleEvent(values as TransformedEventResponse);
                resetForm();
                onClose();
              });
            }}
            onClose={onClose}
          />
        );
      case "location":
        return <AddNewLocation onClose={onClose} />;
      case "article":
        return <ArticleForm formType="create" onClose={onClose} />;
      case "user":
        return <AddUserForm onClose={onClose} />;
      default:
        break;
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>{buttonLabel}</Button>

      <Modal isOpen={isOpen} onClose={onClose} size="l">
        <ModalOverlay />
        <ModalContent {...createModalStyles}>
          <ModalHeader {...createModalHeaderStyles}>{modalHeader}</ModalHeader>
          <ModalCloseButton {...modalCloseButtonStyles} />
          <ModalBody {...createModalBodyStyles}>
            {renderComponent(mode)}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
