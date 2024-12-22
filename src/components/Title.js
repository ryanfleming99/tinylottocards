import React from "react";

export const title = props => {
  const { text } = props;
  return <h1 className="text-5xl font-bold drop-shadow-md">{text}</h1>;
};

export default title;
