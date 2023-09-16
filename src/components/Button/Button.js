import React from "react";
import { ButtonStyle } from "./Button.styled";

const Button = (props) => {
  const { variant = "primary", children, ...rest } = props;
  return (
    <ButtonStyle variant={variant} {...rest}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
