import styled, { css } from 'styled-components' // Required imports

const Button = styled.button`
  text-align: center;
  background-color: lightgrey;
  border-radius: 0px;
  border: 1px solid darkgray;
  color: dimgrey;
  margin: -1px;
  padding: 1em 2em;
  width: 25%;
  font-size: 150%;
  
  ${props => props.addition && css`  // Additional properties for '+' button
    grid-column: col4-start ;
    grid-row: row2-start / row3-end;
  `}
  
   ${props => props.eq && css`  // Additional properties for '=' button
    grid-column: col4-start;
    grid-row: row4-start / row5-end;
    margin-top: -4.8rem;  // Hard-coded solution for a visual bug I couldn't resolve
  `}

  ${props => props.zero && css`  // Additional properties for '0' button
    grid-column: col1-start;
    grid-row: row5-start;
  `}

  ${props => props.point && css`  // Additional properties for '.' button
    grid-column: col2-start;
    grid-row: row5-start;
  `}

`;

export default Button;  // Button component must be exported so others components may use it