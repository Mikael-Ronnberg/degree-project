import {
  Grid,
  GridItem,
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
  litterGridItemStyles,
  litterIconsStyles,
  litterModalStyles,
  metalAnimation,
  plasticAnimation,
  tireAnimation,
} from "../style/styleHome";
import { useEffect, useState } from "react";
import { LitterCard } from "./LitterCard";
import { modalCloseButtonStyles } from "../../../components/buttons/style/buttonStyles";
import { fetchAndAggregateData } from "../../../services/AdminServices";
import { useTotalLitterStore } from "../../../store/useTotalLitterStore";

export const Litter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const { setTotals } = useTotalLitterStore();

  useEffect(() => {
    const fetchData = async () => {
      const totalRes = await fetchAndAggregateData();
      setTotals(totalRes);
    };

    fetchData();
  });

  const openModal = (typeName: string) => {
    setSelectedType(typeName);
    setIsModalOpen(true);
  };

  return (
    <>
      <Grid {...litterIconsStyles}>
        <GridItem
          {...litterGridItemStyles}
          animation={`${tireAnimation} infinite 20s linear`}
          onClick={() => openModal("other")}
        >
          <Tire />
        </GridItem>
        <GridItem
          {...litterGridItemStyles}
          animation={`${glassAnimation} infinite 20s linear`}
          onClick={() => openModal("glass")}
        >
          <Glass />
        </GridItem>
        <GridItem
          {...litterGridItemStyles}
          animation={`${metalAnimation} infinite 20s linear`}
          onClick={() => openModal("metal")}
        >
          <Metal />
        </GridItem>
        <GridItem
          {...litterGridItemStyles}
          animation={`${plasticAnimation} infinite 20s linear`}
          onClick={() => openModal("plastic")}
        >
          <Plastic />
        </GridItem>
        <GridItem
          {...litterGridItemStyles}
          animation={`${animalAnimation} infinite 10s linear`}
          onClick={() => openModal("animal")}
        >
          <Animal />
        </GridItem>
      </Grid>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        size="l"
      >
        <ModalOverlay />
        <ModalContent {...litterModalStyles}>
          <ModalHeader py="2rem">
            <Heading>Det här vet vi om...</Heading>
            <ModalCloseButton {...modalCloseButtonStyles} />
          </ModalHeader>
          <ModalBody>
            <LitterCard type={selectedType} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
