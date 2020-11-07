import React from 'react';
import Circle from './components/Circle'
import Line from './components/Line'
import LengthBox from './components/LengthBox'
import useMathFunctions from './components/useMathFunctions'

const App = () => {

  const { x1, y1, x2, y2, getLength, updateLength, updatePoint, midpoint } = useMathFunctions()

  return (
    <>
      <LengthBox length={getLength()} updateLength={updateLength} midpoint={midpoint} /> 
      <Line x1={x1} y1={y1} x2={x2} y2={y2} length={getLength()}  />
      <Circle x={x1} y={y1} changeX={updatePoint("x1")} changeY={updatePoint("y1")} />
      <Circle x={x2} y={y2} changeX={updatePoint("x2")} changeY={updatePoint("y2")} />
    </>
  );
}

export default App;
