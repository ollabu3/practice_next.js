import { Route, useParams } from "react-router-dom";
import React, { Fragment } from "react";
import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
  const params = useParams(); // route params 가져오기
  return (
    <Fragment>
      <h1>QuoteDetail</h1>
      <Route path={`/quotes/${params.quotesId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
