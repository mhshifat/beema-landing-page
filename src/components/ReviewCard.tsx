import React from "react";
import {
  CardContainer,
  Line,
  QuoteIcon,
  ReviewText,
  UserDetails,
  UserImg,
  Username,
} from "../styles/reviewCard";
import Marginer from "./Marginer";

const ReviewCard: React.FC<{
  reviewText: string;
  username: string;
  userImgUrl: string;
}> = (props) => {
  const { reviewText, username, userImgUrl } = props;

  return (
    <CardContainer>
      <QuoteIcon>
        <i className="fas fa-quote-left" />
      </QuoteIcon>
      <Marginer direction="vertical" margin="6em" />
      <ReviewText>{reviewText}</ReviewText>
      <Marginer direction="vertical" margin="7em" />
      <Line />
      <UserDetails>
        <UserImg src={userImgUrl} />
        <Username>{username}</Username>
      </UserDetails>
    </CardContainer>
  );
};

export default ReviewCard;
