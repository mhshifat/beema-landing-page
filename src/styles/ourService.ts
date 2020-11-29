import styled from "styled-components/macro";

export const ServiceContainer = styled.div<{ isReversed?: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: ${({ isReversed }) => isReversed && "row-reverse"};
  margin-bottom: 4em;
  flex-wrap: wrap-reverse;
  @media screen and (max-width: 480px) {
    justify-content: center;
  }
`;

export const ServiceImg = styled.img`
  width: 22em;
  height: 17em;
  @media screen and (max-width: 480px) {
    width: 18em;
    height: 13em;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 60%;
  @media screen and (max-width: 480px) {
    max-width: 100%;
  }
`;

export const Title = styled.h2`
  color: #000;
  font-size: 28px;
  font-weight: 700;
  margin: 5px 0;
  @media screen and (max-width: 480px) {
    margin-top: 1.5em;
  }
`;

export const Details = styled.p`
  color: #7a7a7a;
  font-size: 21px;
  text-align: center;
  max-width: 55%;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
