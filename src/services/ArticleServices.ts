import {
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  limit,
  startAfter,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  collection,
  getDoc,
} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from "../config/firebase";
import {
  CreateArticleFormValues,
  TransformedArticleResponse,
  ArticleResponse,
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

export const getArticles = async (
  pageNumber: number,
  pageSize: number
): Promise<TransformedArticleResponse[]> => {
  try {
    let articlesQuery = query(
      articleCollectionRef,
      orderBy("createdAt", "desc"),
      limit(pageSize)
    );

    if (pageNumber > 1) {
      const lastDoc = await getLastDocumentOfPreviousPage(pageNumber, pageSize);
      articlesQuery = query(articlesQuery, startAfter(lastDoc));
    }

    const data = await getDocs(articlesQuery);
    const filteredData: TransformedArticleResponse[] = data.docs.map((doc) => {
      const docData = doc.data() as ArticleResponse;
      const createdAtTimestamp = docData.createdAt;
      const createdAtDate = createdAtTimestamp.toDate();
      const readableDate = createdAtDate.toLocaleString();

      return {
        ...docData,
        createdAt: readableDate,
        id: doc.id,
      };
    });

    return filteredData;
  } catch (error) {
    console.error(error);
    return [];
  }
};

async function getLastDocumentOfPreviousPage(
  pageNumber: number,
  pageSize: number
) {
  const lastPageQuery = query(
    articleCollectionRef,
    orderBy("createdAt", "desc"),
    limit((pageNumber - 1) * pageSize)
  );
  const lastPageData = await getDocs(lastPageQuery);
  return lastPageData.docs[lastPageData.docs.length - 1];
}

export const getArticleById = async (articleId: string) => {
  try {
    const docRef = doc(articleCollectionRef, articleId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const docData = docSnap.data() as ArticleResponse;

      return {
        ...docData,
        id: docSnap.id,
      };
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
