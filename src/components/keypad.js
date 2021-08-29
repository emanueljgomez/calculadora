import React from 'react';
import Button from "../style/Button";   // Button component must be imported first
import KeypadContainer from "../style/KeypadContainer";   // KeypadContainer component must be imported first

export default function Keypad() {

        return (
         
            <KeypadContainer>

                    <Button>C</Button>
                    <Button>/</Button>
                    <Button>x</Button>
                    <Button subt>-</Button>
                                        
                    <Button>7</Button>
                    <Button>8</Button>
                    <Button>9</Button>
                    
                    <Button>4</Button>
                    <Button>5</Button>
                    <Button>6</Button>
                    <Button addition>+</Button>

                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>

                    <Button zero>0</Button>
                    <Button point>.</Button>
                    <Button eq>=</Button>                              

            </KeypadContainer>

        )
}