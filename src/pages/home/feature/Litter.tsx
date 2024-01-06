import {
  Box,
  Grid,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { Tire } from "../../../components/icons/Tire";
import { Glass } from "../../../components/icons/Glass";
import { Animal } from "../../../components/icons/Animal";
import { Metal } from "../../../components/icons/Metal";
import { Plastic } from "../../../components/icons/Plastic";
import {
  animalAnimation,
  glassAnimation,
  litterIconBoxStyles,
  litterIconsStyles,
  litterModalStyles,
  metalAnimation,
  plasticAnimation,
  tireAnimation,
} from "../style/styleHome";
import { useState } from "react";
import { LitterCard } from "./LitterCard";
import { modalCloseButtonStyles } from "../../../components/buttons/style/buttonStyles";

export const Litter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("");

  const openModal = (typeName: string) => {
    setSelectedType(typeName);
    setIsModalOpen(true);
  };

  return (
    <>
      <Grid {...litterIconsStyles}>
        <Box
          {...litterIconBoxStyles}
          animation={`${tireAnimation} infinite 20s linear`}
          onClick={() => openModal("other")}
        >
          <Tire />
        </Box>
        <Box
          {...litterIconBoxStyles}
          animation={`${glassAnimation} infinite 20s linear`}
          onClick={() => openModal("glass")}
        >
          <Glass />
        </Box>
        <Box
          {...litterIconBoxStyles}
          animation={`${metalAnimation} infinite 20s linear`}
          onClick={() => openModal("metal")}
        >
          <Metal />
        </Box>
        <Box
          {...litterIconBoxStyles}
          animation={`${plasticAnimation} infinite 20s linear`}
          onClick={() => openModal("plastic")}
        >
          <Plastic />
        </Box>
        <Box
          {...litterIconBoxStyles}
          animation={`${animalAnimation} infinite 10s linear`}
          onClick={() => openModal("animal")}
        >
          <Animal />
        </Box>
      </Grid>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        size="l"
      >
        <ModalOverlay />
        <ModalContent {...litterModalStyles}>
          <ModalHeader border="solid black 2px">
            <Heading>Det här vet vi om...</Heading>
            <ModalCloseButton p="4rem" {...modalCloseButtonStyles} />
          </ModalHeader>
          <ModalBody>
            <LitterCard type={selectedType} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
