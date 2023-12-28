import { create } from "zustand";
import { TransformedArticleResponse } from "../model/ArticlesInterfaces";

interface ArticleState {
  articles: TransformedArticleResponse[];
  setArticles: (articles: TransformedArticleResponse[]) => void;
  setSingleArticle: (article: TransformedArticleResponse) => void;
  deleteSingleArticle: (articleId: string) => void;
  updateArticleStore: (updatedArticle: TransformedArticleResponse) => void;
}

export const useArticlesStore = create<ArticleState>((set) => ({
  articles: [],
  setArticles: (articles) => set({ articles }),
  setSingleArticle: (article) =>
    set((state) => ({ articles: [...state.articles, article] })),
  deleteSingleArticle: (articleId) =>
    set((state) => ({
      articles: state.articles.filter((article) => article.id !== articleId),
    })),
  updateArticleStore: (updatedArticle) =>
    set((state) => ({
      articles: state.articles.map((article) =>
        article.id === updatedArticle.id ? { ...updatedArticle } : article
      ),
    })),
}));
