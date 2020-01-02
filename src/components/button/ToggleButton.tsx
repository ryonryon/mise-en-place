import styled from "@emotion/styled";
import * as React from "react";

const ToggleButtonDiv = styled.div`
  background-color: white;
  display: inline-block;
  border-radius: 5px;
  border: solid 0.5px rgba(221, 221, 221, 0.7);
  color: gray;
  cursor: pointer;
  margin: 16px;

  div {
    display: inline-block;
    padding: 10px 12px;
    border-right: solid 0.5px rgba(221, 221, 221, 0.7);

    &:last-child {
      border-style: none;
    }

    &:hover {
      background-color: rgba(221, 221, 221, 0.5);
    }
  }
`;

interface Props {
  values: string[];
  onClick: Function | null;
}

const ToggleButton = ({ values, onClick }: Props) => (
  <ToggleButtonDiv>
    {values.map((item, index) => (
      <div
        key={index}
        onClick={() => {
          onClick(index);
        }}
      >
        {item}
      </div>
    ))}
  </ToggleButtonDiv>
);

export default ToggleButton;