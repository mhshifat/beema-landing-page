import React from "react";
import { Headline, Img, Wrapper } from "../styles/logo";

const Logo: React.FC<{ inline?: boolean }> = ({ inline = false }) => {
  return (
    <Wrapper inline={inline}>
      <Img inline={inline} src="/assets/logo/logo_croped.png" alt="logo" />
      <Headline inline={inline}>Beema</Headline>
    </Wrapper>
  );
};

export default Logo;
