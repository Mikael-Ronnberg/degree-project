import { useParams } from "react-router-dom";
import { ViewArticle } from "../../view-article/ViewArticle";
import { NotFound } from "../../404/NotFound";

export const ArticleRoute = () => {
  const { article, articleId } = useParams();

  let decodedArticle = "";

  console.log(article);

  if (article) {
    decodedArticle = decodeURIComponent(article);
  }

  console.log(decodedArticle);

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
