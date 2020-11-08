import React from "react";
import styled from "styled-components";

interface Props {
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  value: string;
}

const CoordinateInput: React.FC<Props> = ({ onChange, value }) => {
  return <StyledInput type="number" value={value} onChange={onChange} />;
};

const StyledInput = styled.input`
  width: 60px;
  margin: 8px;
  background: 0 0;
  border: none;
  border-bottom: 1px solid #071a39;
  text-align: center;
  font-size: 13px;
`;

export default CoordinateInput;
