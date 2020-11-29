import styled, { css } from "styled-components/macro";
import { theme } from ".";

export const Wrapper = styled.div<{ inline: boolean }>`
  display: flex;
  flex-direction: ${({ inline }) => (inline ? "row" : "column")};
  align-items: ${({ inline }) => inline && "column"};
`;

export const Img = styled.img<{ inline: boolean }>`
  width: 8em;
  height: 8em;

  ${({ inline }) =>
    inline &&
    css`
      width: 24px;
      height: 24px;
      margin-right: 6px;
    `}
`;

export const Headline = styled.div<{ inline: boolean }>`
  margin-top: ${({ inline }) => (inline ? "0" : "6px")};
  font-size: ${({ inline }) => (inline ? "18px" : "40px")};
  color: ${({ inline }) => (inline ? "#fff" : theme.colorPrimary)};
  font-weight: 900;
`;
