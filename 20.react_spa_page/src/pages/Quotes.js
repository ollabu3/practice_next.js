import React from "react";
import QuoteList from "../components/quotes/QuoteList";
const Quotes = () => {
  return <QuoteList quotes={DummyData} />;
};

export default Quotes;

const DummyData = [
  { id: "q1", author: "Max", text: "Text1" },
  { id: "q2", author: "Min", text: "Text2" },
];
