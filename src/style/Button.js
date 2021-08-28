import styled, { css } from 'styled-components' // Required imports

const Button = styled.button`
  background-color: lightgrey;
  border-radius: 3px;
  border: 2px solid darkgray;
  color: dimgrey;
  margin: 0.2em;
  padding: 0.25em 1em;

  ${props => props.primary && css`  // Additional properties may be defined in order to add special styles
    background: palevioletred;
    color: white;
  `}
`;

export default Button;  // Button component must be exported so others components may use it