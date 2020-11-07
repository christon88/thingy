import React from 'react'
import styled from 'styled-components';

type Props = {
    length: number,
    midpoint: {
        x: number,
        y: number
    },
    updateLength: (newLength: number) => void
}

const LengthBox = ({length, midpoint, updateLength}: Props) => {

    return (
        <StyledInput style={{
            left: midpoint.x-32, // Width/2 
            top: midpoint.y-15, // Height/2            
        }}
        type="number"
        value={length.toFixed(0)}
        min="100"
        onChange={(e: React.FormEvent<HTMLInputElement> ) => updateLength(parseInt(e.currentTarget.value)) }
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

export default LengthBox
