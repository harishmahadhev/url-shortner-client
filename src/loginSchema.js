import * as yup from "yup";

export const signupSchema = yup.object().shape({
    email: yup
        .string()
        .required("Your Email is required")
        .email("Enter valid Email"),
    password: yup
        .string()
        .min(8, "Must contain atleast 8 characters")
        .required("Enter Password"),
    confirmpassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Password doesn't match")
        .required("Password Required"),
    fullname: yup.string().required("Your name is required"),
});

export const signinSchema = yup.object().shape({
    email: yup
        .string()
        .required("Your Email is required")
        .email("Enter valid Email"),
    password: yup
        .string()
        .min(8, "Must contain atleast 8 characters")
        .required("Enter Password"),
});

export const forgotSchema = yup.object().shape({
    email: yup.string().email().required("Email Required"),
});

export const resetSchema = yup.object().shape({
    password: yup
        .string()
        .min(8, "Must contain atleast 8 characters")
        .required("Enter Password"),
    confirmpassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Password doesn't match")
        .required("Password Required"),
});