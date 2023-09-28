import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { registerUser } from "../auth/AuthActions";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { registerLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      navigate("/");
    }
  }, [navigate]);

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password1: "",
      password2: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required(),
      email: Yup.string().required(),
      password1: Yup.string().required("Password is required"),
      password2: Yup.string()
        .required("Repeat Password is Required")
        .oneOf([Yup.ref("password1"), null], "Password Must Match"),
    }),
    onSubmit: (values) => {
      dispatch(registerUser(values))
        .unwrap()
        .then(() => navigate("/auth/login"));
    },
  });
  return { formik, registerLoading };
};

export default useRegister;
