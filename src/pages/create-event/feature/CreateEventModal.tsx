// import {
//   useDisclosure,
//   Button,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalCloseButton,
//   ModalBody,
// } from "@chakra-ui/react";
// import { CreateEventForm } from "./CreateEventForm";

// export const CreateEventModal = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   return (
//     <>
//       <Button onClick={onOpen}>Skapa Händelse</Button>

//       <Modal isOpen={isOpen} onClose={onClose} size="l">
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Skapa Händelsen</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <CreateEventForm onClose={onClose} />
//           </ModalBody>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// };
