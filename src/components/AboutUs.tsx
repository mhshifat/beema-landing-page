import { Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import React from "react";
import { useMediaQuery } from "react-responsive";
import {
  ReviewsContainer,
  StyledCarouselProvider,
  StyledDotGroup,
  StyledSlide,
} from "../styles/aboutUs";
import { SectionTitle } from "../styles/index";
import Marginer from "./Marginer";
import ReviewCard from "./ReviewCard";

const AboutUs = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });

  return (
    <ReviewsContainer name="reviewsSection">
      <SectionTitle>What others are saying about us</SectionTitle>
      <Marginer direction="vertical" margin="3em" />
      <StyledCarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={isMobile ? 250 : 205}
        totalSlides={4}
        visibleSlides={isMobile ? 1 : 2}
        dragEnabled={false}
      >
        <Slider>
          <StyledSlide index={0}>
            <ReviewCard
              reviewText=" I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us."
              username="John coner"
              userImgUrl={"/assets/pictures/profile_picture_1.jpg"}
            />
          </StyledSlide>
          <StyledSlide index={1}>
            <ReviewCard
              reviewText=" I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us."
              username="John coner"
              userImgUrl={"/assets/pictures/profile_picture_2.jpg"}
            />
          </StyledSlide>
          <StyledSlide index={2}>
            <ReviewCard
              reviewText=" I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us."
              username="John coner"
              userImgUrl={"/assets/pictures/profile_picture_3.jpg"}
            />
          </StyledSlide>
          <StyledSlide index={3}>
            <ReviewCard
              reviewText=" I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us."
              username="John coner"
              userImgUrl={"/assets/pictures/profile_picture_4.jpeg"}
            />
          </StyledSlide>
        </Slider>
        <StyledDotGroup />
      </StyledCarouselProvider>
    </ReviewsContainer>
  );
};

export default AboutUs;
