import React from 'react';
import Input from "../style/Input";    // Input component must be imported first (styled component)

export default function InputComp() {

        return (
         
                <form>
                <Input type="text" disabled="disabled" value="1 + 1" />  {/* Style applied to input element */}
                </form>

        )
}