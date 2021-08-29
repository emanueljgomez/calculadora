import styled from 'styled-components' // Required imports

const KeypadContainer = styled.div` //  This container component is required in order to apply the Grid functionality
    display: grid;
    grid-template-columns: [col1-start] 100px [col2-start] 100px [col3-start] 100px [col4-start] 100px [col4-end];
    grid-template-rows: [row1-start] auto
                        [row2-start] auto
                        [row3-start] auto [row3-end] auto
                        [row4-start] auto [row4-end] auto
                        [row5-start] auto [row5-end];
`;

export default KeypadContainer;  // KeypadContainer component must be exported so others components may use it