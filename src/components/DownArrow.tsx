import React, { HTMLAttributes } from "react";
import { Icon, Wrapper } from "../styles/downArrow";

const DownArrow: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  ...restProps
}) => {
  return (
    <Wrapper {...restProps}>
      <Icon>
        <i className="fa fa-angle-down"></i>
      </Icon>
    </Wrapper>
  );
};

export default DownArrow;
