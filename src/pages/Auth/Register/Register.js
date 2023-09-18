import React from "react";
import { AuthButton, AuthForm, AuthInput, AuthStyle } from "../Auth.styled";
import useRegister from "../hooks/useRegister";
import FormError from "../../../components/FormError/FormError";

const Register = () => {
  const { formik, registerLoading } = useRegister();
  return (
    <AuthStyle>
      <AuthForm onSubmit={formik.handleSubmit}>
        <AuthInput
          type="text"
          name="username"
          placeholder="Username"
          value={formik.values.username}
          {...formik.getFieldProps("username")}
        />
        {formik.touched.username && formik.errors.username ? (
          <FormError>{formik.errors.username}</FormError>
        ) : null}
        <AuthInput
          type="email"
          name="email"
          placeholder="Email"
          value={formik.values.email}
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <FormError>{formik.errors.email}</FormError>
        ) : null}
        <AuthInput
          type="password"
          name="password1"
          placeholder="Password"
          value={formik.values.password1}
          {...formik.getFieldProps("password1")}
        />
        {formik.touched.password1 && formik.errors.password1 ? (
          <FormError>{formik.errors.password1}</FormError>
        ) : null}
        <AuthInput
          type="password"
          name="password2"
          placeholder="Confirm Password"
          value={formik.values.password2}
          {...formik.getFieldProps("password2")}
        />
        {formik.touched.password2 && formik.errors.password2 ? (
          <FormError>{formik.errors.password2}</FormError>
        ) : null}
        <AuthButton type="submit" disabled={registerLoading}>
          {registerLoading ? "Loading..." : "Register"}
        </AuthButton>
      </AuthForm>
    </AuthStyle>
  );
};

export default Register;
