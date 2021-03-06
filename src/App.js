import React from 'react';
import Keypad from "./components/keypad";    // Keypad component must be imported first
import InputComp from "./components/input";    // InputComp component must be imported first
import Container from "./style/Container";    // Container component must be imported first
import Card from "./style/Card";    // Card component must be imported first

export default function App() {
    
    return (
        <Container>  {/* Container Styled Component will center all content */}
            <Card>   {/* Wrapper Styled Component for all the calculator elements */}


                <InputComp />  {/* Renders Input Component */}


                <Keypad />  {/* Renders Keypad Component */}

            </Card>
        </Container>
    )
}
