import styled from "@emotion/styled";
import * as React from "react";

const PasswordDiv = styled.div`
  display: inline-block;
  width: 30.5%;
  margin: 16px;
  padding-right: 5px;
`;

const PasswordLabel = styled.label`
  display: inline-block;
  float: right;
  cursor: pointer;
`;

const StyledInput = styled.input`
  height: 24px;
  width: 99%;
  margin: 0;
  padding: 4px;
  border: 1px solid gray;
  opacity: 0.4;
  border-radius: 4px;
`;

const PasswordImage = styled.img`
  height: 12px;
  wieght: 12px;
`;

const PasswordTextInput = ({ placeholder }) => {
  const [imageName, setImageName] = React.useState("show");
  const [inputType, setInputType] = React.useState("password");

  const handleClick = () => {
    setImageName(prevValue => (prevValue === "hide" ? "show" : "hide"));
    setInputType(prevValue => (prevValue === "password" ? "text" : "password"));
  };

  return (
    <PasswordDiv>
      <PasswordLabel htmlFor="password-input" onClick={handleClick}>
        <PasswordImage src={`/public/assets/${imageName}.svg`} />
      </PasswordLabel>
      <StyledInput
        name="password-input"
        type={inputType}
        placeholder={placeholder}
      />
    </PasswordDiv>
  );
};

export default PasswordTextInput;