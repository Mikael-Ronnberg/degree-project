import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { Field, Formik, FormikHelpers } from "formik";
import {
  formFlexStyles,
  formLabelStyles,
  inputFormStyles,
  textareaFormStyles,
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
import {
  cancelButtonStyles,
  greyButtonStyles,
} from "../../../components/buttons/style/buttonStyles";

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
      if (mainImgFile) {
        const mainImgUrl = await uploadFile(mainImgFile);
        values.mainImg = mainImgUrl;
      }
      if (subImg1File) {
        const subImg1Url = await uploadFile(subImg1File);
        values.subImg1 = subImg1Url;
      }
      if (subImg2File) {
        const subImg2Url = await uploadFile(subImg2File);
        values.subImg2 = subImg2Url;
      }

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
            <Flex {...formFlexStyles}>
              <FormLabel {...formLabelStyles} htmlFor="mainHeading">
                Titel för händelsen
              </FormLabel>
              <Input
                {...inputFormStyles}
                id="mainHeading"
                name="mainHeading"
                placeholder="Article Titel"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.mainHeading}
              />
              <Field name="mainImg">
                {() => (
                  <>
                    <FormLabel {...formLabelStyles} htmlFor="mainImg">
                      Lägg till huvudbild
                    </FormLabel>
                    <Input
                      {...inputFormStyles}
                      id="mainImg"
                      type="file"
                      name="mainImg"
                      placeholder="Ladda upp huvudbild"
                      onChange={handleFileChange(setMainImgFile)}
                      accept="image/*"
                    />
                  </>
                )}
              </Field>
              <FormLabel {...formLabelStyles} htmlFor="mainImgName">
                Ange ett namn för bilden(Viktigt!)
              </FormLabel>
              <Input
                {...inputFormStyles}
                id="mainImgName"
                name="mainImgName"
                placeholder="Namn för bilden"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.mainImgName}
              />
              <FormLabel {...formLabelStyles} htmlFor="date">
                Datum för Artikeln
              </FormLabel>
              <Input
                {...inputFormStyles}
                id="date"
                name="date"
                placeholder="(YYYY/MM/DD)"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.date}
              />
              <FormLabel {...formLabelStyles} htmlFor="category">
                Kategori för Artikeln
              </FormLabel>
              <Input
                {...inputFormStyles}
                id="category"
                name="category"
                placeholder="Kategori"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.category}
              />
              <FormLabel {...formLabelStyles} htmlFor="author">
                Författare
              </FormLabel>
              <Input
                {...inputFormStyles}
                id="author"
                name="author"
                placeholder="Författare"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.author}
              />
              <FormLabel {...formLabelStyles} htmlFor="subHeading1">
                Sektionsrubrik 1
              </FormLabel>
              <Textarea
                {...textareaFormStyles}
                id="subHeading1"
                name="subHeading1"
                placeholder="Sektionsrubrik"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subHeading1}
              />
              <FormLabel {...formLabelStyles} htmlFor="section1">
                Sektion 1
              </FormLabel>
              <Textarea
                {...textareaFormStyles}
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
                    {...inputFormStyles}
                    id="subImg1"
                    type="file"
                    name="subImg1"
                    placeholder="Ladda upp sectionsbild 1"
                    onChange={handleFileChange(setSubImg1File)}
                    accept="image/*"
                  />
                )}
              </Field>
              <FormLabel {...formLabelStyles} htmlFor="subImg1Name">
                Ange ett namn för bilden(Viktigt!)
              </FormLabel>
              <Input
                {...inputFormStyles}
                id="subImg1Name"
                name="subImg1Name"
                placeholder="Namn för bilden"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subImg1Name}
              />
              <FormLabel {...formLabelStyles} htmlFor="subImgDescription1">
                Bildtext för Sektionsbild 1
              </FormLabel>
              <Input
                {...inputFormStyles}
                id="subImgDescription1"
                name="subImgDescription1"
                placeholder="Beskrivning (Valfritt)"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subImgDescription1}
              />
              <FormLabel {...formLabelStyles} htmlFor="subHeading2">
                Sektionsrubrik 2
              </FormLabel>
              <Textarea
                {...textareaFormStyles}
                id="subHeading2"
                name="subHeading2"
                placeholder="Sektionsrubrik 2 (Valfritt)"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subHeading2}
              />
              <FormLabel {...formLabelStyles} htmlFor="section1">
                Sektion 2
              </FormLabel>
              <Textarea
                {...textareaFormStyles}
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
                    {...inputFormStyles}
                    id="subImg2"
                    type="file"
                    name="subImg2"
                    placeholder="Ladda upp sectionsbild 2"
                    onChange={handleFileChange(setSubImg2File)}
                    accept="image/*"
                  />
                )}
              </Field>
              <FormLabel {...formLabelStyles} htmlFor="subImg2Name">
                Ange ett namn för bilden(Viktigt!)
              </FormLabel>
              <Input
                {...inputFormStyles}
                id="subImg2Name"
                name="subImg2Name"
                placeholder="Namn för bilden"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subImg2Name}
              />
              <FormLabel {...formLabelStyles} htmlFor="subImgDescription1">
                Beskrivning Sektionsbild 2
              </FormLabel>
              <Input
                {...inputFormStyles}
                id="subImgDescription2"
                name="subImgDescription2"
                placeholder="Beskrivning (Valfritt)"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subImgDescription2}
              />
              <FormLabel {...formLabelStyles} htmlFor="subHeading3">
                Sektionsrubrik 3
              </FormLabel>
              <Textarea
                {...textareaFormStyles}
                id="subHeading3"
                name="subHeading3"
                placeholder="Sektionsrubrik 3 (Valfritt)"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subHeading3}
              />
              <FormLabel {...formLabelStyles} htmlFor="section1">
                Sektion 3
              </FormLabel>
              <Textarea
                {...textareaFormStyles}
                id="section3"
                name="section3"
                placeholder="Sektion 3 (Valfritt)"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.section3}
              />
              <VStack spacing="2rem" pt="3rem">
                <Button {...cancelButtonStyles} onClick={onClose}>
                  Stäng
                </Button>
                <Button type="submit" {...greyButtonStyles}>
                  {submitButtonText}
                </Button>
              </VStack>
            </Flex>
          </FormControl>
        </form>
      )}
    </Formik>
  );
};
