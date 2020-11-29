import React from "react";
import {
  AccessibilityContainer,
  BrandContainer,
  LoginBtn,
  Wrapper,
} from "../styles/navbar";
import Button from "./Button";
import Logo from "./Logo";
import Marginer from "./Marginer";

const Navbar = () => {
  return (
    <Wrapper>
      <BrandContainer>
        <Logo inline />
      </BrandContainer>
      <AccessibilityContainer>
        <Button small>Get Started</Button>
        <Marginer direction="horizontal" margin="8px" />
        <LoginBtn small>Login</LoginBtn>
      </AccessibilityContainer>
    </Wrapper>
  );
};

export default Navbar;
