import React from "react";
import {
  DescriptionContainer,
  Details,
  ServiceContainer,
  ServiceImg,
  Title,
} from "../styles/ourService";

const OurService: React.FC<{
  isReversed?: boolean;
  title: string;
  description: string;
  imgUrl: string;
}> = ({ isReversed, title, description, imgUrl }) => {
  return (
    <ServiceContainer isReversed={isReversed}>
      <DescriptionContainer>
        <Title>{title}</Title>
        <Details>{description}</Details>
      </DescriptionContainer>
      <ServiceImg src={imgUrl} />
    </ServiceContainer>
  );
};

export default OurService;
