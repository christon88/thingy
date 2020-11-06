import React, { useState } from 'react';
import Circle from './components/Circle'
import Line from './components/Line'

const App = () => {
  const [x1, setX1] = useState(250)
  const [y1, setY1] = useState(250)
  const [x2, setX2] = useState(450)
  const [y2, setY2] = useState(450)



  return (
    <>
      <Line x1={x1} y1={y1} x2={x2} y2={y2} />
      <Circle x={x1} y={y1} changeX={setX1} changeY={setY1} />
      <Circle x={x2} y={y2} changeX={setX2} changeY={setY2} />
    </>
  );
}

export default App;
