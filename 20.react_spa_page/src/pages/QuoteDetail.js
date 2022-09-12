import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
import React, { Fragment, useEffect } from "react";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/useHttp";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = ({ match }) => {
  const routeMatch = useRouteMatch(); // 현재 route표시
  const params = useParams(); // route params 가져오기
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);
  const { quoteId } = params;

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "panding") {
    return <LoadingSpinner />;
  }
  if (error) {
    return <p className="centered">{error}</p>;
  }
  if (loadedQuote) {
    // 없을 경우
    return <p>No Quote found!</p>;
  }
  console.log({ routeMatch, match });

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
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
