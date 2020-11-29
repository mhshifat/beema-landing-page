import React from "react";
import { Wrapper } from "../styles/marginer";

const Marginer: React.FC<{
  direction: "vertical" | "horizontal";
  margin: string | number;
}> = ({ ...restProps }) => {
  return <Wrapper {...restProps} />;
};

export default Marginer;
