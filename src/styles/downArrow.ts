import styled from "styled-components/macro";
import { theme } from ".";

export const Wrapper = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: rgba(113, 113, 113, 0.48);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  margin-bottom: 25px;
  border: 2px solid transparent;
  transition: all 250ms ease-in-out;
  cursor: pointer;

  &:hover {
    border: 2px solid ${theme.colorPrimary};
  }
`;

export const Icon = styled.div`
  color: #fff;
  font-size: 29px;
`;
