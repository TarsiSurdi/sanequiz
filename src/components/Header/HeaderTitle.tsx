import styled from "styled-components";
import { theme } from "../../globalStyle";

export default styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0;
  padding: 0.25em 0;

  font-family: Orbitron, cursive;
  font-size: 28pt;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-align: center;

  color: ${theme.headerTitle};
`;
