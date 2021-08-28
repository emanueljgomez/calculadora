import React, { useState } from 'react';
import Button from "./style/Button";        // Button component must be imported first

export default function App() {
    
    const [result, setResult] = useState("");

    return (
        <div className="container"> 
            <form>
            <input type="text" value={result} />
            </form>

            <div className="keypad">
                <Button>Clear</Button>
                <Button>C</Button>
                <Button>&divide;</Button>   {/* Renders Division symbol */}
                <Button>7</Button>
                <Button>8</Button>
                <Button>9</Button>
                <Button>&times;</Button>   {/* Renders Multiplication symbol */}
                <Button>4</Button>
                <Button>5</Button>
                <Button>6</Button>
                <Button>&ndash;</Button>    {/* Renders Subtraction symbol */}
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>+</Button>
                <Button>0</Button>
                <Button>.</Button>
                <Button>=</Button>
            </div>

        </div>
    )
}
