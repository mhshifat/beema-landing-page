import React from "react";
import { SectionTitle } from "../styles/index";
import { Wrapper } from "../styles/services";
import Marginer from "./Marginer";
import OurService from "./OurService";

const Services = () => {
  return (
    <Wrapper name="servicesSection">
      <SectionTitle>Best Quality Software</SectionTitle>
      <Marginer direction="vertical" margin="3em" />
      <OurService
        title="Fully integrated services"
        description="We build and deliver fully integrated webapps
      with customized control panels that fit your 
      compnay needs"
        imgUrl={"/assets/illustrations/web_development_.png"}
      />
      <OurService
        title="Mobile optimized"
        description="We build and deliver fully integrated webapps
      with customized control panels that fit your 
      compnay needs"
        imgUrl={"/assets/illustrations/mobile_phone.png"}
        isReversed
      />
      <OurService
        title="Quality is our priority"
        description="We have teams of professional developers, designers
    and managers that ensures delivering the best 
    software quality for your company"
        imgUrl={"/assets/illustrations/bug_fixed.png"}
      />
    </Wrapper>
  );
};

export default Services;
