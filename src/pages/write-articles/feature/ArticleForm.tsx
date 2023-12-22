import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { Formik, FormikHelpers } from "formik";
import {
  createFormStyles,
  createInputFormStyles,
  createTextareaFormStyles,
} from "../../admin/style/styleAdmin";
import { CreateArticleFormValues } from "../../../model/AdminInterfaces";
import { submitArticle } from "../../../services/AdminServices";

interface ArticleFormProps {
  onClose: () => void;
}

export const ArticleForm = ({ onClose }: ArticleFormProps) => {
  const initialValues: CreateArticleFormValues = {
    mainHeading: "",
    mainImg: "",
    mainImgName: "",
    date: "",
    author: "",
    subHeading1: "",
    section1: "",
    subImg1: "",
    subImg1Name: "",
    subImgDescription1: "",
    subHeading2: "",
    section2: "",
    subImg2: "",
    subImg2Name: "",
    subImgDescription2: "",
    subHeading3: "",
    section3: "",
  };

  const handleSubmit = (
    values: CreateArticleFormValues,
    { resetForm }: FormikHelpers<CreateArticleFormValues>
  ) => {
    submitArticle(values);
    resetForm();
    onClose();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FormControl>
            <Flex {...createFormStyles}>
              <FormLabel htmlFor="mainHeading">Titel för händelsen</FormLabel>
              <Input
                {...createInputFormStyles}
                name="mainHeading"
                placeholder="Article Titel"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.mainHeading}
              />
              <FormLabel htmlFor="mainImg">Url för huvudBild</FormLabel>
              <Input
                {...createInputFormStyles}
                name="mainImg"
                placeholder="Url"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.mainImg}
              />
              <FormLabel htmlFor="mainImgName">
                Ange ett namn för bilden(Viktigt!)
              </FormLabel>
              <Input
                {...createInputFormStyles}
                name="mainImgName"
                placeholder="Namn för bilden"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.mainImgName}
              />
              <FormLabel htmlFor="date">Datum för Artikeln</FormLabel>
              <Input
                {...createInputFormStyles}
                name="date"
                placeholder="Datum"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.date}
              />
              <FormLabel htmlFor="author">Författare</FormLabel>
              <Input
                {...createInputFormStyles}
                name="author"
                placeholder="Författare"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.author}
              />
              <FormLabel htmlFor="subHeading1">Sektionsrubrik 1</FormLabel>
              <Textarea
                {...createTextareaFormStyles}
                name="subHeading1"
                placeholder="Sektionsrubrik"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subHeading1}
              />
              <FormLabel htmlFor="section1">Sektion 1</FormLabel>
              <Textarea
                {...createTextareaFormStyles}
                name="section1"
                placeholder="Sektion"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.section1}
              />
              <FormLabel htmlFor="subImg1">URL för Sektionsbild 1</FormLabel>
              <Input
                {...createInputFormStyles}
                name="subImg1"
                placeholder="Url (Valfritt)"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subImg1}
              />
              <FormLabel htmlFor="subImg1Name">
                Ange ett namn för bilden(Viktigt!)
              </FormLabel>
              <Input
                {...createInputFormStyles}
                name="subImg1Name"
                placeholder="Namn för bilden"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subImg1Name}
              />
              <FormLabel htmlFor="subImgDescription1">
                Bildtext för Sektionsbild 1
              </FormLabel>
              <Input
                {...createInputFormStyles}
                name="subImgDescription1"
                placeholder="Beskrivning (Valfritt)"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subImgDescription1}
              />
              <FormLabel htmlFor="subHeading2">Sektionsrubrik 2</FormLabel>
              <Textarea
                {...createTextareaFormStyles}
                name="subHeading2"
                placeholder="Sektionsrubrik 2 (Valfritt)"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subHeading2}
              />
              <FormLabel htmlFor="section1">Sektion 2</FormLabel>
              <Textarea
                {...createTextareaFormStyles}
                name="section2"
                placeholder="Sektion 2 (Valfritt)"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.section2}
              />
              <FormLabel htmlFor="subImg2">URL för Sektionsbild 2</FormLabel>
              <Input
                {...createInputFormStyles}
                name="subImg2"
                placeholder="Url (Valfritt)"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subImg2}
              />
              <FormLabel htmlFor="subImg2Name">
                Ange ett namn för bilden(Viktigt!)
              </FormLabel>
              <Input
                {...createInputFormStyles}
                name="subImg2Name"
                placeholder="Namn för bilden"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subImg2Name}
              />
              <FormLabel htmlFor="subImgDescription1">
                Beskrivning Sektionsbild 2
              </FormLabel>
              <Input
                {...createInputFormStyles}
                name="subImgDescription2"
                placeholder="Beskrivning (Valfritt)"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subImgDescription2}
              />
              <FormLabel htmlFor="subHeading3">Sektionsrubrik 3</FormLabel>
              <Textarea
                {...createTextareaFormStyles}
                name="subHeading3"
                placeholder="Sektionsrubrik 3 (Valfritt)"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subHeading3}
              />
              <FormLabel htmlFor="section1">Sektion 3</FormLabel>
              <Textarea
                {...createTextareaFormStyles}
                name="section3"
                placeholder="Sektion 3 (Valfritt)"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.section3}
              />
              <HStack spacing="2rem">
                <Button colorScheme="blue" onClick={onClose}>
                  Stäng
                </Button>
                <Button type="submit">Spara</Button>
              </HStack>
            </Flex>
          </FormControl>
        </form>
      )}
    </Formik>
  );
};
