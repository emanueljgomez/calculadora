import React, { useState } from 'react';
import Keypad from "./components/keypad";    // Keypad component must be imported first
import InputComp from "./components/input";    // Input component must be imported first
import Container from "./style/Container";    // Container component must be imported first
import Card from "./style/Card";    // Card component must be imported first

export default function App() {

    const [result, setResult] = useState("");

    return (
        <Container>  {/* Container Styled Component will center all content */}
            <Card>


                <InputComp />  {/* Renders Input Component */}


                <Keypad />  {/* Renders Keypad Component */}

            </Card>
        </Container>
    )
}
