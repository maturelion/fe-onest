import React from "react";
import { AuthButton, AuthForm, AuthInput, AuthStyle } from "../Auth.styled";
import useLogin from "../hooks/useLogin";
import FormError from "../../../components/FormError/FormError";

const Login = () => {
  const { formik, loginLoading } = useLogin();
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
          type="password"
          name="password"
          placeholder="Password"
          value={formik.values.password}
          {...formik.getFieldProps("password")}
        />
        {formik.touched.password && formik.errors.password ? (
          <FormError>{formik.errors.password}</FormError>
        ) : null}
        <AuthButton type="submit" disabled={loginLoading}>
          {loginLoading ? "Loading..." : "Login"}
        </AuthButton>
      </AuthForm>
    </AuthStyle>
  );
};

export default Login;
