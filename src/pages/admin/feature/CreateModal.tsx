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
import { CreateEventForm } from "../../create-event/feature/CreateEventForm";
import { AddNewLocation } from "../../our-locations/feature/AddNewLocation";
import { ArticleForm } from "../../write-articles/feature/ArticleForm";
import { AddUserForm } from "../../add-user/feature/AddUserForm";

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
  const renderComponent = (mode: string) => {
    switch (mode) {
      case "event":
        return <CreateEventForm onClose={onClose} />;
      case "location":
        return <AddNewLocation onClose={onClose} />;
      case "article":
        return <ArticleForm onClose={onClose} />;
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
        <ModalContent>
          <ModalHeader>{modalHeader}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{renderComponent(mode)}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
