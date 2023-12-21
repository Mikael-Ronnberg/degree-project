// import { Formik, FormikHelpers } from "formik";
// import { submitEvent } from "../../../services/AdminServices";
// import {
//   Button,
//   Flex,
//   FormControl,
//   FormLabel,
//   HStack,
//   Input,
//   Textarea,
//   VStack,
// } from "@chakra-ui/react";
// import {
//   createFormStyles,
//   createInputFormStyles,
//   createTextareaFormStyles,
// } from "../style/CreateStyles";
// import { ChangeEvent } from "@chakra-ui/react";
// import { useState } from "react";

// export interface EventInputLabels {
//   id: string;
//   name: string;
//   label: string;
//   placeholder: string;
// }

// export interface EventTextareaLabels {
//   id: string;
//   name: string;
//   label: string;
//   placeholder: string;
// }

// interface EventFormValues {
//   heading: string;
//   date: string;
//   description: string;
// }

// type CreateFormValues = EventFormValues;

// export type InputFormLabels = EventInputLabels;

// export type TextareaFormLabels = EventTextareaLabels;

// interface DynamicFormValues {
//   [key: string]: string;
// }

// interface CreateFormProps {
//   onClose: () => void;
//   mode: string;
//   inputs: InputFormLabels[];
//   textareas: TextareaFormLabels[];
// }

// export const ComponentForm = ({
//   onClose,
//   mode,
//   inputs,
//   textareas,
// }: CreateFormProps) => {

//   const [data, setData] = useState<DynamicFormValues>(initialValues);

//   const handleInput = (e: ChangeEvent) => {
//     const id = e.target.id;
//     const value = e.target.value;
//     setData({ ...data, [id]: value });
//   };
//   const initialValues: DynamicFormValues = data;

//   const performSubmit = (mode: string, values: CreateFormValues) => {
//     switch (mode) {
//       case "event":
//         submitEvent(values);
//         break;
//       // case "location":
//       //     submitOurLocation(values)
//       //     break;
//       // case "article":
//       //     submitArticle(values)
//       //     break;
//       // case "user":
//       //     submitUser(values);
//       //     break;
//       default:
//         break;
//     }
//   };

//   const handleSubmit = (
//     values: CreateFormValues,
//     { resetForm }: FormikHelpers<CreateFormValues>
//   ) => {
//     performSubmit(mode, values);
//     resetForm();
//     onClose();
//   };

//   return (
//     <>
//       <Formik
//         initialValues={initialValues}
//         onSubmit={handleSubmit}
//         enableReinitialize
//       >
//         {({ values, handleChange, handleBlur, handleSubmit }) => (
//           <form onSubmit={handleSubmit}>
//             <FormControl>
//               <Flex {...createFormStyles}>
//                 <>
//                   {inputs.map((input) => (
//                     <VStack spacing="1rem" key={input.id}>
//                       <FormLabel htmlFor={input.name}>{input.label}</FormLabel>
//                       <Input
//                         {...createInputFormStyles}
//                         name={input.name}
//                         placeholder={input.placeholder}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         value={values}
//                       />
//                     </VStack>
//                   ))}
//                   {textareas.map((textarea) => (
//                     <VStack spacing="1rem" key={textarea.id}>
//                       <FormLabel htmlFor={textarea.name}>
//                         {textarea.label}
//                       </FormLabel>
//                       <Textarea
//                         {...createTextareaFormStyles}
//                         name={textarea.name}
//                         placeholder={textarea.placeholder}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         value={values.value}
//                       />
//                     </VStack>
//                   ))}
//                 </>
//               </Flex>
//               <HStack spacing="2rem">
//                 <Button colorScheme="blue" onClick={onClose}>
//                   Stäng
//                 </Button>
//                 <Button type="submit">Spara</Button>
//               </HStack>
//             </FormControl>
//           </form>
//         )}
//       </Formik>
//     </>
//   );
// };
