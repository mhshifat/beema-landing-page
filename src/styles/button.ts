import styled from "styled-components/macro";
import { theme } from ".";

export const Wrapper = styled.button<{ small?: boolean }>`
  background: ${theme.colorPrimary};
  color: #fff;
  padding: ${({ small }) => (small ? "5px 8px" : "7px 15px")};
  border-radius: 5px;
  font-weight: bold;
  font-size: ${({ small }) => (small ? "12px" : "16px")};
  cursor: pointer;
  outline: none;
  border: 2px solid transparent;
  transition: all 220ms ease-in-out;

  &:hover {
    background: transparent;
    border: 2px solid ${theme.colorPrimary};
  }
`;
