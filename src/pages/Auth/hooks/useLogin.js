import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { loginUser } from "../auth/AuthActions";

const useLogin = () => {
  const dispatch = useDispatch();
  const { loginLoading } = useSelector((state) => state.auth);
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
      dispatch(loginUser(values));
    },
  });
  return { formik, loginLoading };
};

export default useLogin;
