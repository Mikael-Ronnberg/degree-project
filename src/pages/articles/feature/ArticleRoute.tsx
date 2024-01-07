import { useParams } from "react-router-dom";
import { ViewArticle } from "../../view-article/ViewArticle";
import { NotFound } from "../../notFound/NotFound";

export const ArticleRoute = () => {
  const { article, articleId } = useParams();

  let decodedArticle = "";

  if (article) {
    decodedArticle = decodeURIComponent(article);
  }

  return (
    <>
      {decodedArticle && articleId ? (
        <ViewArticle articleName={decodedArticle} id={articleId} />
      ) : (
        <NotFound />
      )}
    </>
  );
};
