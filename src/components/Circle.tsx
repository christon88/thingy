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
            <span>
                X<StyledInput type="number" value={x.toFixed(0)} onChange={(e: React.FormEvent<HTMLInputElement> ) =>  changeX(parseInt(e.currentTarget.value))} />
            </span>
            <span>
                Y<StyledInput type="number" value={y.toFixed(0)} onChange={(e: React.FormEvent<HTMLInputElement> ) =>  changeY(parseInt(e.currentTarget.value))} />
            </span>
        </StyledCircle>
    )
}

const StyledCircle = styled.span`
    position: absolute;
    border-radius: 50%;
    margin-top: -75px;
    margin-left: -75px;
    width: 150px;
    height: 150px;
    background: #ff705a;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

const StyledInput = styled.input`
    width: 60px;
    margin: 8px;
    background: 0 0;
    border: none;
    border-bottom: 1px solid #071a39;
    text-align: center;
    font-size: 13px;
`

export default Circle
