import React from 'react'
import styled from 'styled-components';

type Props = {
    length: number,
    angle: number
    midpoint: {
        x: number,
        y: number
    },
    updateLength: (newLength: number) => void,
}

const LengthInput = ({length,angle, midpoint, updateLength }: Props) => {

    const handleChange = (value: number) => {
        if (value === 0 || isNaN(value)) {
            value = 100
        } 
        updateLength(value)
    }

    return (
        <StyledInput style={{
            left: midpoint.x-32, // Width/2 
            top: midpoint.y-15, // Height/2
            transform: `rotate(${angle}rad)`          
        }}
        type="number"
        value={length.toFixed(0)}
        onChange={(e: React.FormEvent<HTMLInputElement> ) => handleChange(parseInt(e.currentTarget.value)) }
        />  
    )
}

const StyledInput = styled.input`
            position: absolute;
            background: #071a39;
            color: white;
            width: 50px;
            z-index: 1;
            padding: 5px;
            border-radius: 5px;
            border: 2px solid #071a39
`

export default LengthInput
