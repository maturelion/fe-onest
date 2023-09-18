import React from "react";
import { FormErrorStyle } from "./FormError.styled";

const FormError = ({ children }) => {
  return <FormErrorStyle>{children}</FormErrorStyle>;
};

export default FormError;
