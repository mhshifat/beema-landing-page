import React from "react";
import { Element, scroller } from "react-scroll";
import { BGFilter, MotivationalText, Wrapper } from "../styles/heroFull";
import Button from "./Button";
import DownArrow from "./DownArrow";
import Logo from "./Logo";
import Marginer from "./Marginer";
import Navbar from "./Navbar";

const HeroFull = () => {
  return (
    <Element name="hero">
      <Wrapper>
        <BGFilter>
          <Navbar />
          <Marginer direction="vertical" margin="8em" />
          <Logo />
          <Marginer direction="vertical" margin="3em" />
          <MotivationalText>Software Development</MotivationalText>
          <MotivationalText>From the best in the Industry</MotivationalText>
          <Marginer direction="vertical" margin="2em" />
          <Button>Start your Project</Button>
          <DownArrow
            onClick={() =>
              scroller.scrollTo("servicesSection", {
                smooth: true,
                duration: 1500,
              })
            }
          />
        </BGFilter>
      </Wrapper>
    </Element>
  );
};

export default HeroFull;
