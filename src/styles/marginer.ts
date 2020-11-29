import styled, { css } from "styled-components/macro";

export const Wrapper = styled.div<{
  direction: "vertical" | "horizontal";
  margin: string | number;
}>`
  display: flex;

  ${({ direction, margin }) =>
    direction === "horizontal"
      ? css`
          width: ${typeof margin === "string" ? margin : margin + "px"};
        `
      : direction === "vertical"
      ? css`
          height: ${typeof margin === "string" ? margin : margin + "px"};
        `
      : null}
`;
