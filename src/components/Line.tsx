import React from 'react'
import styled from 'styled-components';


type Props = {
    x1: number,
    y1: number
    x2: number,
    y2: number
}

const Line = ({x1, y1, x2, y2}: Props) => {

    const radius = 75
        
    return(
        <svg style={{
            left: 0,
            top: 0,
            position: "absolute",
            height: "100%",
            width: "100%"
        }}>
            <StyledLine x1={x1+radius} y1={y1+radius} x2={x2+radius} y2={y2+radius} />
        </svg> 
    )
}

const StyledLine = styled.line`
    stroke:#071a39;
    stroke-width:2
`;

export default Line
