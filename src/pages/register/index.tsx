import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "src/services/user.service";
import * as Y from "yup";

/**
 * 2 sự lựa chọn
 * 1. Sử dụng component có sẵn của formik: <Formik />, <Field />: contextAPi
 * 2. Sử dụng hooks useFormik
 *
 * Ưu tiên sử dụng useFormik
 */

// const field = {
//   name: "userName",
//   onChange: () => {},
//   value: "",
// };

// <Register a={10} b={20} {...field} />;
// // <==>
// Register({ a: 10, b: 20, ...field });
// Register({ a: 10, b: 20, name: "userName", onChange: () => {}, value: "" });

const validate = (value: any) => {
  const errors: Partial<typeof value> = {};

  /**
   * user name: - bắt buộc
   * 						- từ 5 - 20 ký tự
   * password: 	- bắt buộc
   * 						- từ 5 - 20 ký tự
   */

  // if (value.userName === "") {
  if (!value.userName) {
    errors.userName = "User name yêu cầu bắt buộc.";
  } else if (value.userName.length > 20 || value.userName.length < 5) {
    errors.userName = "User name phải từ 5 đến 20 ký tự.";
  }

  if (!value.password) {
    errors.password = "Password yêu cầu bắt buộc.";
  } else if (value.password.length > 20 || value.password.length < 5) {
    errors.password = "Password phải từ 5 đến 20 ký tự.";
  }

  if (!value.confirmPassword) {
    errors.confirmPassword = "Confirm Password yêu cầu bắt buộc.";
  } else if (value.confirmPassword !== value.password) {
    errors.confirmPassword =
      "Confirm password phải trùng khớp với lại password.";
  }

  return errors;
};

const registerSchema = Y.object({
  email: Y.string().email().required(),
  userName: Y.string()
    .min(5, "User name phải lớn hơn 5 ký tự.")
    .max(20, "User name phải nhỏ hơn 20 ký tự.")
    .required("Bắt buộc nhập vào user name."),
  password: Y.string()
    .min(5, "Password phải lớn hơn 5 ký tự.")
    .max(20, "Password phải nhỏ hơn 20 ký tự.")
    .required("Bắt buộc nhập vào password."),
  confirmPassword: Y.string()
    .oneOf([Y.ref("password")], "Passwords must match")
    .required("Bắt buộc nhập vào Confirm password."),
});

export type TParamsRegister = {
  email: string;
  password: string;
  name: string;
  gender: boolean;
  phone: string;
};

function Register(props: any) {
  const navigate = useNavigate();
  /**
   *  props = { a: 10, b: 20 }
   */
  const formik = useFormik({
    initialValues: {
      userName: "", // giống tên name props của input
      password: "",
      confirmPassword: "",
      email: "",
    },
    // chọn 1 trong 2

    // 2. sử dụng thư viện
    validationSchema: registerSchema,

    // 1. lựa chọn validate thủ công
    // validate,

    onSubmit: (value) => {
      const data: TParamsRegister = {
        gender: true,
        phone: "0123456789",

        email: value.email,
        password: value.password,
        name: value.userName,
      };

      signup(data)
        .then(() => {
          navigate("/login");
        })
        .catch(() => {
          alert("Error");
        });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        placeholder="Email"
        // name="userName"
        // value={formik.values.userName}
        // onChange={formik.handleChange}
        // onBlur={formik.handleBlur}

        {...formik.getFieldProps("email")}
      />
      {formik.touched.email && formik.errors.email && (
        <p>{formik.errors.email}</p>
      )}
      <br />
      <input
        placeholder="User name"
        // name="userName"
        // value={formik.values.userName}
        // onChange={formik.handleChange}
        // onBlur={formik.handleBlur}

        {...formik.getFieldProps("userName")}
      />
      {formik.touched.userName && formik.errors.userName && (
        <p>{formik.errors.userName}</p>
      )}

      <br />
      <input placeholder="Password" {...formik.getFieldProps("password")} />
      {formik.touched.password && formik.errors.password && (
        <p>{formik.errors.password}</p>
      )}

      <br />
      <input
        placeholder="Confirm Password"
        {...formik.getFieldProps("confirmPassword")}
      />

      {formik.touched.confirmPassword && formik.errors.confirmPassword && (
        <p>{formik.errors.confirmPassword}</p>
      )}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Register;
