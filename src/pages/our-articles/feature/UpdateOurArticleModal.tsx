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
import { TransformedArticleResponse } from "../../../model/AdminInterfaces";
import { ArticleForm } from "../../write-articles/feature/ArticleForm";

interface UpdateOurArticleProps {
  formValues: TransformedArticleResponse;
}

export const UpdateOurArticleModal = ({
  formValues,
}: UpdateOurArticleProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Uppdatera</Button>

      <Modal isOpen={isOpen} onClose={onClose} size="l">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ändra Denna Artikel</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ArticleForm
              formType="update"
              formValues={formValues}
              onClose={onClose}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
