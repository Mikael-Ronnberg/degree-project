import { Timestamp } from "firebase/firestore";

export interface CreateArticleFormValues {
  mainHeading: string;
  mainImg: string;
  mainImgName: string;
  date: string;
  category: string;
  author: string;
  subHeading1: string;
  section1: string;
  subImg1?: string;
  subImg1Name?: string;
  subImgDescription1?: string;
  subHeading2?: string;
  section2?: string;
  subImg2?: string;
  subImg2Name?: string;
  subImgDescription2?: string;
  subHeading3?: string;
  section3?: string;
}

export interface ArticleResponse {
  id: string;
  mainHeading: string;
  mainImg: string;
  mainImgName: string;
  date: string;
  category: string;
  author: string;
  subHeading1: string;
  section1: string;
  subImg1?: string;
  subImg1Name?: string;
  subImgDescription1?: string;
  subHeading2?: string;
  section2?: string;
  subImg2?: string;
  subImg2Name?: string;
  subImgDescription2?: string;
  subHeading3?: string;
  section3?: string;
  createdAt: Timestamp;
}

export interface TransformedArticleResponse
  extends Omit<ArticleResponse, "createdAt"> {
  createdAt: string;
}
