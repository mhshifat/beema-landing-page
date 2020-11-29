import styled from "styled-components";

export const CardContainer = styled.div`
  width: 350px;
  height: 430px;
  background-color: #fff;
  box-shadow: 0px 0px 7px rgba(17, 17, 17, 0.2);
  border-radius: 3px;
  margin: 5px 0;
  position: relative;
  padding: 10px 1.2em;
`;

export const QuoteIcon = styled.div`
  position: absolute;
  top: 13px;
  left: 17px;
  color: #d1d1d1;
  font-size: 37px;
`;

export const ReviewText = styled.p`
  font-size: 17px;
  color: #585858;
  font-weight: normal;
  display: flex;
  justify-content: center;
`;

export const Line = styled.span`
  min-width: 100%;
  min-height: 1px;
  margin-bottom: 1em;
  background-color: #cdcdcd;
  display: flex;
`;

export const UserDetails = styled.div`
  display: flex;
  align-items: center;
`;

export const UserImg = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const Username = styled.span`
  font-size: 15px;
  color: #000;
`;
