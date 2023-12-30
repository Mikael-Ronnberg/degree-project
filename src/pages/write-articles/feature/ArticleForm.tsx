import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { Field, Formik, FormikHelpers } from "formik";
import {
  createFormStyles,
  createInputFormStyles,
  createTextareaFormStyles,
} from "../../admin/style/styleAdmin";
import {
  CreateArticleFormValues,
  TransformedArticleResponse,
} from "../../../model/ArticlesInterfaces";
import {
  submitArticle,
  updateArticle,
  uploadFile,
} from "../../../services/ArticleServices";
import { useState } from "react";
import { useArticlesStore } from "../../../store/useArticlesStore";

interface ArticleFormProps {
  formType: "create" | "update";
  formValues?: Omit<TransformedArticleResponse, "createdAt">;
  onClose: () => void;
}

export const ArticleForm = ({
  formType,
  formValues,
  onClose,
}: ArticleFormProps) => {
  const [mainImgFile, setMainImgFile] = useState<File | null>(null);
  const [subImg1File, setSubImg1File] = useState<File | null>(null);
  const [subImg2File, setSubImg2File] = useState<File | null>(null);

  const { setSingleArticle, updateArticleStore } = useArticlesStore();

  const isUpdateForm = formType === "update";
  const submitButtonText = isUpdateForm ? "Updatera" : "Spara";
  const initialValues:
    | CreateArticleFormValues
    | Omit<TransformedArticleResponse, "createdAt"> =
    formType === "update" && formValues
      ? {
          id: formValues.id,
          mainHeading: formValues.mainHeading,
          mainImg: formValues.mainImg,
          mainImgName: formValues.mainImgName,
          date: formValues.date,
          category: formValues.category,
          author: formValues.author,
          subHeading1: formValues.subHeading1,
          section1: formValues.section1,
          subImg1: formValues.subImg1,
          subImg1Name: formValues.subImg1Name,
          subImgDescription1: formValues.subImgDescription1,
          subHeading2: formValues.subHeading2,
          section2: formValues.section2,
          subImg2: formValues.subImg2,
          subImg2Name: formValues.subImg2Name,
          subImgDescription2: formValues.subImgDescription2,
          subHeading3: formValues.subHeading3,
          section3: formValues.section3,
        }
      : {
          mainHeading: "",
          mainImg: "",
          mainImgName: "",
          date: "",
          category: "",
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

  const handleFileChange =
    (setter: React.Dispatch<React.SetStateAction<File | null>>) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files[0]) {
        setter(event.target.files[0]);
      }
    };

  const handleSubmit = async (
    values:
      | CreateArticleFormValues
      | Omit<TransformedArticleResponse, "createdAt">,
    { resetForm }: FormikHelpers<CreateArticleFormValues>
  ) => {
    try {
      const mainImgUrl = await uploadFile(mainImgFile);
      const subImg1Url = await uploadFile(subImg1File);
      const subImg2Url = await uploadFile(subImg2File);

      values.mainImg = mainImgUrl;
      values.subImg1 = subImg1Url;
      values.subImg2 = subImg2Url;

      if (formType === "create") {
        submitArticle(values as CreateArticleFormValues);
        setSingleArticle(values as TransformedArticleResponse);
      }
      if (formType === "update") {
        updateArticle(values as Omit<TransformedArticleResponse, "createdAt">);
        updateArticleStore(values as TransformedArticleResponse);
      }

      resetForm();
      onClose();
    } catch (error) {
      console.error(error);
    }
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
                id="mainHeading"
                name="mainHeading"
                placeholder="Article Titel"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.mainHeading}
              />
              <Field name="mainImg">
                {() => (
                  <Input
                    {...createInputFormStyles}
                    id="mainImg"
                    type="file"
                    name="mainImg"
                    placeholder="Ladda upp huvudbild"
                    onChange={handleFileChange(setMainImgFile)}
                    accept="image/*"
                  />
                )}
              </Field>
              <FormLabel htmlFor="mainImgName">
                Ange ett namn för bilden(Viktigt!)
              </FormLabel>
              <Input
                {...createInputFormStyles}
                id="mainImgName"
                name="mainImgName"
                placeholder="Namn för bilden"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.mainImgName}
              />
              <FormLabel htmlFor="date">Datum för Artikeln</FormLabel>
              <Input
                {...createInputFormStyles}
                id="date"
                name="date"
                placeholder="Datum"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.date}
              />
              <FormLabel htmlFor="date">Kategori för Artikeln</FormLabel>
              <Input
                {...createInputFormStyles}
                id="category"
                name="category"
                placeholder="Kategori"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.category}
              />
              <FormLabel htmlFor="author">Författare</FormLabel>
              <Input
                {...createInputFormStyles}
                id="author"
                name="author"
                placeholder="Författare"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.author}
              />
              <FormLabel htmlFor="subHeading1">Sektionsrubrik 1</FormLabel>
              <Textarea
                {...createTextareaFormStyles}
                id="subHeading1"
                name="subHeading1"
                placeholder="Sektionsrubrik"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subHeading1}
              />
              <FormLabel htmlFor="section1">Sektion 1</FormLabel>
              <Textarea
                {...createTextareaFormStyles}
                id="section1"
                name="section1"
                placeholder="Sektion"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.section1}
              />
              <Field name="subImg1">
                {() => (
                  <Input
                    {...createInputFormStyles}
                    id="subImg1"
                    type="file"
                    name="subImg1"
                    placeholder="Ladda upp sectionsbild 1"
                    onChange={handleFileChange(setSubImg1File)}
                    accept="image/*"
                  />
                )}
              </Field>
              <FormLabel htmlFor="subImg1Name">
                Ange ett namn för bilden(Viktigt!)
              </FormLabel>
              <Input
                {...createInputFormStyles}
                id="subImg1Name"
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
                id="subImgDescription1"
                name="subImgDescription1"
                placeholder="Beskrivning (Valfritt)"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subImgDescription1}
              />
              <FormLabel htmlFor="subHeading2">Sektionsrubrik 2</FormLabel>
              <Textarea
                {...createTextareaFormStyles}
                id="subHeading2"
                name="subHeading2"
                placeholder="Sektionsrubrik 2 (Valfritt)"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subHeading2}
              />
              <FormLabel htmlFor="section1">Sektion 2</FormLabel>
              <Textarea
                {...createTextareaFormStyles}
                id="section2"
                name="section2"
                placeholder="Sektion 2 (Valfritt)"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.section2}
              />
              <Field name="subImg2">
                {() => (
                  <Input
                    {...createInputFormStyles}
                    id="subImg2"
                    type="file"
                    name="subImg2"
                    placeholder="Ladda upp sectionsbild 2"
                    onChange={handleFileChange(setSubImg2File)}
                    accept="image/*"
                  />
                )}
              </Field>
              <FormLabel htmlFor="subImg2Name">
                Ange ett namn för bilden(Viktigt!)
              </FormLabel>
              <Input
                {...createInputFormStyles}
                id="subImg2Name"
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
                id="subImgDescription2"
                name="subImgDescription2"
                placeholder="Beskrivning (Valfritt)"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subImgDescription2}
              />
              <FormLabel htmlFor="subHeading3">Sektionsrubrik 3</FormLabel>
              <Textarea
                {...createTextareaFormStyles}
                id="subHeading3"
                name="subHeading3"
                placeholder="Sektionsrubrik 3 (Valfritt)"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subHeading3}
              />
              <FormLabel htmlFor="section1">Sektion 3</FormLabel>
              <Textarea
                {...createTextareaFormStyles}
                id="section3"
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
                <Button type="submit">{submitButtonText}</Button>
              </HStack>
            </Flex>
          </FormControl>
        </form>
      )}
    </Formik>
  );
};
