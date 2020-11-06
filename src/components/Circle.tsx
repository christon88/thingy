import React from 'react'
import styled from 'styled-components';


type Props = {
    x: number,
    y: number,
    changeX: (value: number) => void,
    changeY: (value: number) => void,
}

const Circle = ({x, y, changeX, changeY}: Props) => {

    
    return(
        <StyledCircle style={{
            left: x,
            top: y
        }}>
            <StyledInput type="number" value={x} onChange={(e: React.FormEvent<HTMLInputElement> ) =>  changeX(parseInt(e.currentTarget.value))} />
            <br/>
            <StyledInput type="number" value={y} onChange={(e: React.FormEvent<HTMLInputElement> ) =>  changeY(parseInt(e.currentTarget.value))} />
        </StyledCircle>
    )
}

const StyledCircle = styled.span`
    position: absolute;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    background: #ff705a;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledInput = styled.input`
    width: 50px;
`

export default Circle
