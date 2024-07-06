import styled from "styled-components";
import { size } from "./Sizes";
import colors from "./Colors";

export const BoxHover = styled.section`
  display: flex;
  padding: ${(props) => props.padding || size.S};
  margin: ${(props) => props.margin || `0 ${size.XS}`};
  border-radius: ${size.XS};
  cursor: pointer;
  border: 1px solid transparent;
  transition: border 0.2s;
  &:hover {
    border: 1px solid ${colors.primary};
  }
`;
