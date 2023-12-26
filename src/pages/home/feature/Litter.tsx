import {
  Box,
  Grid,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
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
  litterIconsStyles,
  litterModalStyles,
  metalAnimation,
  plasticAnimation,
  tireAnimation,
} from "../style/styleHome";
import { useState } from "react";
import { LitterCard } from "./LitterCard";

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
          animation={`${tireAnimation} infinite 20s linear`}
          onClick={() => openModal("other")}
        >
          <Tire />
        </Box>
        <Box
          animation={`${glassAnimation} infinite 20s linear`}
          onClick={() => openModal("glass")}
        >
          <Glass />
        </Box>
        <Box
          animation={`${metalAnimation} infinite 20s linear`}
          onClick={() => openModal("metal")}
        >
          <Metal />
        </Box>
        <Box
          animation={`${plasticAnimation} infinite 20s linear`}
          onClick={() => openModal("plastic")}
        >
          <Plastic />
        </Box>
        <Box
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
          <ModalCloseButton />
          <ModalBody>
            <LitterCard type={selectedType} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
