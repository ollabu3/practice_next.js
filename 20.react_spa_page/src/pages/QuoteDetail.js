import { Route, useParams, Link } from "react-router-dom";
import React, { Fragment } from "react";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const QuoteDetail = () => {
  const params = useParams(); // route params 가져오기
  console.log({ params });
  const quote = DummyData.find((quote) => quote.id === params.quotesId);
  console.log({ quote });

  if (!quote) {
    // 없을 경우
    return <p>No Quote found!</p>;
  }
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quotesId}`} exact>
        <div className="centered">
          <Link
            className="btn--flat"
            to={`/quotes/${params.quotesId}/comments`}
          >
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`/quotes/${params.quotesId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;

const DummyData = [
  { id: "q1", author: "Max", text: "Text1" },
  { id: "q2", author: "Min", text: "Text2" },
];
