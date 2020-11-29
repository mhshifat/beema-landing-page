import React from "react";
import { SectionTitle } from "../styles/index";
import {
  AboutContainer,
  AboutImg,
  AboutText,
  MoreAboutContainer,
} from "../styles/moreAbout";

const MoreAbout = () => {
  return (
    <MoreAboutContainer name="moreAboutSection">
      <SectionTitle>More About Beema</SectionTitle>
      <AboutContainer>
        <AboutText>
          Beema is about designing, building and deliverying best quality
          software for your company. {<br />}
          {<br />} We make sure that you get the best software inferstracture
          and set of applications to ensure the best experience of your clients.{" "}
          {<br />}
          {<br />} So wether you are handling thousands of payment transactions
          or you’re just starting out, you are in the right place.
        </AboutText>
        <AboutImg src={"/assets/illustrations/rocket_launch_.png"} />
      </AboutContainer>
    </MoreAboutContainer>
  );
};

export default MoreAbout;
