import React, { useState } from "react";
import styled from "styled-components";
import CoordinateInput from "./CoordinateInput";

type Props = {
  x: number;
  y: number;
  changeX: (value: number) => void;
  changeY: (value: number) => void;
};

const Circle: React.FC<Props> = ({ x, y, changeX, changeY }) => {
  const [dX, setDX] = useState(0);
  const [dY, setDY] = useState(0);
  const [dragging, setDragging] = useState(false);

  const drag = (event: React.MouseEvent) => {
    if (dragging) {
      changeX(event.clientX - dX);
      changeY(event.clientY - dY);
    }
  };

  return (
    <StyledCircle
      style={{
        left: x,
        top: y,
      }}
      onMouseDown={(event) => {
        setDragging(true);
        setDX(event.clientX - x);
        setDY(event.clientY - y);
      }}
      onMouseLeave={(event) => {
        drag(event);
      }}
      onMouseMove={(event) => {
        drag(event);
      }}
      onMouseUp={() => {
        setDragging(false);
      }}
    >
      <Label>
        X
        <CoordinateInput
          value={x.toFixed(0)}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            changeX(parseInt(e.currentTarget.value))
          }
        />
      </Label>
      <Label>
        Y
        <CoordinateInput
          value={y.toFixed(0)}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            changeY(parseInt(e.currentTarget.value))
          }
        />
      </Label>
    </StyledCircle>
  );
};

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
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
  &:-moz-drag-over {
    cursor: grabbing;
  }
`;

const Label = styled.span`
  &::selection {
    background: rgba(0, 0, 0, 0);
  }
`;

export default Circle;
