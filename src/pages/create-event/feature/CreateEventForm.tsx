// import {
//   Button,
//   Flex,
//   FormControl,
//   FormLabel,
//   HStack,
//   Input,
//   Textarea,
// } from "@chakra-ui/react";
// import { Formik, FormikHelpers } from "formik";
// import { CreateEventFormValues } from "../../../model/AdminInterfaces";
// import { submitEvent } from "../../../services/AdminServices";
// import {
//   createFormStyles,
//   createInputFormStyles,
//   createTextareaFormStyles,
// } from "../../admin/style/styleAdmin";

// interface CreateEventFormProps {
//   onClose: () => void;
// }

// export const CreateEventForm = ({ onClose }: CreateEventFormProps) => {
//   const initialValues: CreateEventFormValues = {
//     heading: "",
//     date: "",
//     description: "",
//   };

//   const handleSubmit = (
//     values: CreateEventFormValues,
//     { resetForm }: FormikHelpers<CreateEventFormValues>
//   ) => {
//     submitEvent(values);
//     resetForm();
//     onClose();
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       onSubmit={handleSubmit}
//       enableReinitialize
//     >
//       {({ values, handleChange, handleBlur, handleSubmit }) => (
//         <form onSubmit={handleSubmit}>
//           <FormControl>
//             <Flex {...createFormStyles}>
//               <FormLabel htmlFor="heading">Titel för händelsen</FormLabel>
//               <Input
//                 {...createInputFormStyles}
//                 name="heading"
//                 placeholder="Titel"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.heading}
//               />
//               <FormLabel htmlFor="date">Datum för händelsen</FormLabel>
//               <Input
//                 {...createInputFormStyles}
//                 name="date"
//                 placeholder="Datum"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.date}
//               />
//               <FormLabel htmlFor="description">Skriv om händelsen</FormLabel>
//               <Textarea
//                 {...createTextareaFormStyles}
//                 name="description"
//                 placeholder="Skriv om kommande händelse och plats"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.description}
//               />
//               <HStack spacing="2rem">
//                 <Button colorScheme="blue" onClick={onClose}>
//                   Stäng
//                 </Button>
//                 <Button type="submit">Spara</Button>
//               </HStack>
//             </Flex>
//           </FormControl>
//         </form>
//       )}
//     </Formik>
//   );
// };
