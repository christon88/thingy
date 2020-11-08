import { useState } from "react";

const useMathFunctions = () => {
  const [x1, setX1] = useState(250);
  const [y1, setY1] = useState(250);

  const [x2, setX2] = useState(450);
  const [y2, setY2] = useState(450);

  const getLength = () => {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  };

  const getAngle = (x1: number, x2: number, y1: number, y2: number) => {
    const dx = x2 - x1;
    const dy = y2 - y1; // Negate for CCW angle
    const angle = Math.atan2(dy, dx);
    return angle;
  };

  const getP2 = (x1: number, y1: number, length: number) => {
    return {
      newX2: x1 + length * Math.cos(getAngle(x1, x2, y1, y2)),
      newY2: y1 + length * Math.sin(getAngle(x1, x2, y1, y2)),
    };
  };

  const updateLength = (newLength: number) => {
    setX2(getP2(x1, y1, newLength).newX2);
    setY2(getP2(x1, y1, newLength).newY2);
  };

  const updatePoint = (pointName: "x1" | "y1" | "x2" | "y2") => {
    return function (value: number) {
      switch (pointName) {
        case "x1":
          setX1(value);
          break;
        case "y1":
          setY1(value);
          break;
        case "x2":
          setX2(value);
          break;
        case "y2":
          setY2(value);
          break;
        default:
          break;
      }
    };
  };

  const midpoint = { x: x1 + (x2 - x1) / 2, y: y1 + (y2 - y1) / 2 };

  return {
    x1,
    y1,
    x2,
    y2,
    getLength,
    getAngle,
    updateLength,
    updatePoint,
    midpoint,
  };
};

export default useMathFunctions;
