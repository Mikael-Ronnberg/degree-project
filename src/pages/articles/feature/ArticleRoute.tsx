import { useParams } from "react-router-dom";
import { NotFound } from "../../notFound/NotFound";
import { ViewArticle } from "../../viewArticle/ViewArticle";

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
