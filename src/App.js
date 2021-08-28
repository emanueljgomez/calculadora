import React, { useState } from 'react';
import Keypad from "./components/keypad";    // Keypad component must be imported first
import Container from "./style/Container";    // Container component must be imported first

export default function App() {
    
    const [result, setResult] = useState("");

    return (
        <Container>  {/* Container Styled Component will center all content */}
            <form>
            <input type="text" value={result} />
            </form>

            <Keypad />  {/* Renders Keypad Component */}

        </Container>
    )
}
