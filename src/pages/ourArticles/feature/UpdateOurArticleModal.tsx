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
import { TransformedArticleResponse } from "../../../model/ArticlesInterfaces";
import { ArticleForm } from "../../writeArticles/feature/ArticleForm";
import {
  greySmallButtonStyles,
  modalCloseButtonStyles,
} from "../../../components/buttons/style/buttonStyles";
import { modalStyles, modalHeaderStyles } from "../../admin/style/styleAdmin";

interface UpdateOurArticleProps {
  formValues: TransformedArticleResponse;
}

export const UpdateOurArticleModal = ({
  formValues,
}: UpdateOurArticleProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} {...greySmallButtonStyles}>
        Uppdatera
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="l">
        <ModalOverlay />
        <ModalContent {...modalStyles}>
          <ModalHeader {...modalHeaderStyles}>Ändra Denna Artikel</ModalHeader>
          <ModalCloseButton {...modalCloseButtonStyles} />
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
