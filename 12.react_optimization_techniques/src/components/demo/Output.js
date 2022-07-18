import React, { memo } from "react";
import OutputContainer from "./OutputContainer";

const output = ({ show }) => {
  return <OutputContainer>{show && <h1>TRUE!</h1>}</OutputContainer>;
};

export default memo(output);
