import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/useHttp";
import { addQuote } from "../lib/api";
const NewQuotes = () => {
  const { sendREquest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.pushState("/quotes");
    }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    sendREquest(quoteData);
    console.log(quoteData);
  };

  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
};

export default NewQuotes;
