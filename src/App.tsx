import React from "react";
import Circle from "./components/Circle";
import Line from "./components/Line";
import LengthInput from "./components/LengthInput";
import useMathFunctions from "./hooks/useMathFunctions";
import styled from "styled-components";

const App: React.FC = () => {
  const {
    x1,
    y1,
    x2,
    y2,
    getLength,
    getAngle,
    updateLength,
    pointSetters,
    midpoint,
  } = useMathFunctions();

  return (
    <StyledSpan onDragOver={(event) => event.preventDefault()}>
      <LengthInput
        length={getLength()}
        angle={getAngle(x1, x2, y1, y2)}
        updateLength={updateLength}
        midpoint={midpoint}
      />
      <Line x1={x1} y1={y1} x2={x2} y2={y2} />
      <Circle
        x={x1}
        y={y1}
        changeX={pointSetters.x1}
        changeY={pointSetters.y1}
      />
      <Circle
        x={x2}
        y={y2}
        changeX={pointSetters.x2}
        changeY={pointSetters.y2}
      />
    </StyledSpan>
  );
};

const StyledSpan = styled.span`
  font-family: Lato, Arial, Helvetica, sans-serif;
  font-size: 14px;
`;

export default App;
