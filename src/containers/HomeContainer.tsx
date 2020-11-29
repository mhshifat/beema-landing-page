import React from "react";
import {
  AboutUs,
  Footer,
  HeroFull,
  Marginer,
  MoreAbout,
  Services,
} from "../components";
import { Wrapper } from "../styles/homeContainer";

const HomeContainer = () => {
  return (
    <Wrapper>
      <HeroFull />
      <Services />
      <Marginer direction="vertical" margin="2em" />
      <AboutUs />
      <MoreAbout />
      <Marginer direction="vertical" margin="8em" />
      <Footer />
    </Wrapper>
  );
};

export default HomeContainer;
