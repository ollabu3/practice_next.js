import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
import React, { Fragment } from "react";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const QuoteDetail = ({ match }) => {
  const routeMatch = useRouteMatch(); // 현재 route표시
  const params = useParams(); // route params 가져오기
  const quote = DummyData.find((quote) => quote.id === params.quotesId);
  console.log({ routeMatch, match });

  if (!quote) {
    // 없을 경우
    return <p>No Quote found!</p>;
  }
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={routeMatch.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${routeMatch.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`${routeMatch.path}/comments`}>
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
