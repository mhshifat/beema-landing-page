import React, { ButtonHTMLAttributes } from "react";
import { Wrapper } from "../styles/button";

const Button: React.FC<
  { small?: boolean } & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, ...restProps }) => {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

export default Button;
