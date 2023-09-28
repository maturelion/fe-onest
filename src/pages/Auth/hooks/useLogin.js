import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { loginUser } from "../auth/AuthActions";
import { getUser } from "../../../feature/user/UserActions";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loginLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      navigate("/");
    }
  }, [navigate]);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      dispatch(loginUser(values))
        .unwrap()
        .then(() => {
          dispatch(getUser({}));
          navigate("/");
        });
    },
  });
  return { formik, loginLoading };
};

export default useLogin;
