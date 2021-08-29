import React, { useState } from 'react';
import Keypad from "./components/keypad";    // Keypad component must be imported first
import Container from "./style/Container";    // Container component must be imported first
import Card from "./style/Card";    // Card component must be imported first
import Input from "./style/Input";    // Input component must be imported first

export default function App() {
    
    const [result, setResult] = useState("");

    return (
        <Container>  {/* Container Styled Component will center all content */}
            <Card>

                <form>
                <Input type="text" value={result} />  {/* Renders Form Component */}
                </form>

                <Keypad />  {/* Renders Keypad Component */}

            </Card>
        </Container>
    )
}
