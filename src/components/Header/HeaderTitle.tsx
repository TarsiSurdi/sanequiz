import styled from "styled-components";
import { theme } from "../../globalStyle";

export default styled.h1`
  margin: 0;

  font-family: Bokor, cursive;
  font-size: 32pt;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-align: center;

  color: ${theme.headerTitle};
`;
