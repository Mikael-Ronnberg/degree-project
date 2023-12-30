import { create } from "zustand";
import { TransformedArticleResponse } from "../model/ArticlesInterfaces";

interface ArticleState {
  articles: TransformedArticleResponse[];
  loadedPages: Set<number>;
  setArticles: (articles: TransformedArticleResponse[]) => void;
  setSingleArticle: (article: TransformedArticleResponse) => void;
  deleteSingleArticle: (articleId: string) => void;
  updateArticleStore: (updatedArticle: TransformedArticleResponse) => void;
  markPageAsLoaded: (page: number) => void;
  isPageLoaded: (page: number) => boolean;
}

export const useArticlesStore = create<ArticleState>((set, get) => ({
  articles: [],
  loadedPages: new Set(),
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
  markPageAsLoaded: (page) =>
    set((state) => {
      const updatedLoadedPages = new Set(state.loadedPages);
      updatedLoadedPages.add(page);
      return { loadedPages: updatedLoadedPages };
    }),
  isPageLoaded: (page) => {
    const state = get();
    return state.loadedPages.has(page);
  },
}));
