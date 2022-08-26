import { Fragment, useState } from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const QuoteList = (props) => {
  const routeMatch = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isSortingAsending = queryParams.get("sort") === "asc";

  const sortQuotes = (quotes, ascending) => {
    return quotes.sort((a, b) => {
      if (ascending) {
        return a.id > b.id ? 1 : -1;
      } else {
        return a.id < b.id ? 1 : -1;
      }
    });
  };
  const sortedQuotes = sortQuotes(props.quotes, isSortingAsending);
  const changeSortingHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${isSortingAsending ? "desc" : "asc"}  
    `,
    });
    // history.push(
    //   `${location.pathname}?sort=${isSortingAsending ? "desc" : "asc"}`
    // );
  };

  console.log({ location, isSortingAsending });

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAsending ? "Desending" : "Asending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
