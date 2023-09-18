import styled from "styled-components";

export const AuthStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 90px);
  overflow-y: hidden;
  padding-inline: 20px;
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #039f5e3d;
  padding-block: 50px;
  width: 100%;
  max-width: 425px;
  border-radius: 8px;
`;

export const AuthInput = styled.input`
  width: 90%;
  max-width: 300px;
  height: 40px;
  margin-block: 20px 0px;
  border: none;
  border-radius: 8px;
  -webkit-tap-highlight-color: transparent;
  outline: none;
`;

export const AuthButton = styled.button`
  width: 90%;
  max-width: 300px;
  height: 40px;
  margin-block: 20px;
  border: none;
  border-radius: 8px;
  background-color: #039f5e;
  color: #fff;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:disabled {
    background-color: #039f5e70;
  }
`;
