import styled from "styled-components/macro";
import { Button } from "../components";

export const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LoginBtn = styled(Button)`
  background: transparent;
  border: none;

  &:hover {
    background: transparent;
    border: none;
    color: rgb(212, 212, 212);
  }
`;

export const AccessibilityContainer = styled.div`
  display: flex;
`;

export const BrandContainer = styled.div``;
