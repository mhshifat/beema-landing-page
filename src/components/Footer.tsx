import React from "react";
import {
  AccessibilityContainer,
  FooterContainer,
  Link,
  MotivationalText,
  PrivacyContainer,
  RightsReserved,
  SocialContainer,
  SocialIcon,
} from "../styles/footer";
import Button from "./Button";
import Logo from "./Logo";
import Marginer from "./Marginer";

const Footer = () => {
  return (
    <FooterContainer>
      <Marginer direction="vertical" margin="5em" />
      <Logo inline />
      <Marginer direction="vertical" margin="1em" />
      <MotivationalText>Just say the magical word</MotivationalText>
      <MotivationalText>and we will do the rest</MotivationalText>
      <Marginer direction="vertical" margin="1em" />
      <Button>Start your Project</Button>
      <Marginer direction="vertical" margin="5em" />
      <AccessibilityContainer>
        <PrivacyContainer>
          <Link>Privacy Policy</Link>
          <Link>Terms of Service</Link>
          <Link>Contact</Link>
        </PrivacyContainer>
        <SocialContainer>
          <SocialIcon>
            <i className="fab fa-twitter" />
          </SocialIcon>
          <SocialIcon>
            <i className="fab fa-linkedin" />
          </SocialIcon>
        </SocialContainer>
      </AccessibilityContainer>
      <RightsReserved>&copy; 2020 Beema All rights reserved</RightsReserved>
    </FooterContainer>
  );
};

export default Footer;
