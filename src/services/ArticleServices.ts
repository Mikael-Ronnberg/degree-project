import {
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  doc,
  deleteDoc,
  updateDoc,
  collection,
  onSnapshot,
  getDoc,
  Timestamp,
} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from "../config/firebase";
import {
  ArticleResponse,
  CreateArticleFormValues,
  TransformedArticleResponse,
} from "../model/ArticlesInterfaces";

const articleCollectionRef = collection(db, "articles");

export const submitArticle = async (article: CreateArticleFormValues) => {
  try {
    await addDoc(articleCollectionRef, {
      ...article,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getArticles = (
  setArticles: (articles: TransformedArticleResponse[]) => void
): (() => void) => {
  const articlesQuery = query(
    articleCollectionRef,
    orderBy("createdAt", "desc")
  );

  const unsubscribe = onSnapshot(articlesQuery, (snapshot) => {
    const articlesData: TransformedArticleResponse[] = snapshot.docs.map(
      (doc) => {
        const data = doc.data();
        const createdAtTimestamp = data.createdAt;
        const createdAtDate = createdAtTimestamp.toDate();
        const readableDate = createdAtDate.toLocaleString();

        return {
          id: doc.id,
          createdAt: readableDate,
          mainHeading: data.mainHeading,
          mainImg: data.mainImg,
          mainImgName: data.mainImgName,
          date: data.date,
          category: data.category,
          author: data.author,
          subHeading1: data.subHeading1,
          section1: data.section1,
          subImg1: data.subImg1,
          subImg1Name: data.subImg1Name,
          subImgDescription1: data.subImgDescription1,
          subHeading2: data.subHeading2,
          section2: data.section2,
          subImg2: data.subImg2,
          subImg2Name: data.subImg2Name,
          subImgDescription2: data.subImgDescription2,
          subHeading3: data.subHeading3,
          section3: data.section3,
        };
      }
    );

    setArticles(articlesData);
  });

  return unsubscribe;
};

export const getArticleById = async (articleId: string) => {
  try {
    const docRef = doc(articleCollectionRef, articleId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const docData = docSnap.data() as ArticleResponse;
      const transformedData = {
        ...docData,
        id: docSnap.id,
        createdAt:
          docData.createdAt instanceof Timestamp
            ? docData.createdAt.toDate().toString()
            : docData.createdAt,
      };

      return transformedData;
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching document: ", error);
    return null;
  }
};

export const deleteArticle = async (articleId: string) => {
  const articleDoc = doc(db, "articles", articleId);
  await deleteDoc(articleDoc);
};

export const updateArticle = async (
  article: Omit<TransformedArticleResponse, "createdAt">
) => {
  try {
    const articleDoc = doc(db, "articles", article.id);
    await updateDoc(articleDoc, { ...article });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const uploadFile = async (file: File | null): Promise<string> => {
  if (file) {
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    await uploadTask;
    return getDownloadURL(uploadTask.snapshot.ref);
  }
  return "";
};
