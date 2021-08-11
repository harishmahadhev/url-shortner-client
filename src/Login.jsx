import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signinSchema, signupSchema } from "./loginSchema";
import ReactLoading from "react-loading";
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [isSignup, setSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: isSignup ? yupResolver(signupSchema) : yupResolver(signinSchema),
  });
  const handleshowpassword = () => setShowPassword((on) => !on);
  const inputProps = StyledTextField();
  const loginSubmit = (data) => {
    setLoading(true);
    console.log(data);
    reset();
  };

  return (
    <div className="loginContainer">
      <div className="loginRight">
        <h3 className="loginTitle">
          {isSignup ? "Welcome !" : "Welcome Back !"}
        </h3>
        <form
          className="loginForm"
          autoComplete="off"
          onSubmit={handleSubmit(loginSubmit)}
        >
          {isSignup && (
            <>
              <TextField
                className="loginInput"
                name="fullname"
                placeholder={`Enter Your First Name`}
                {...register("fullname")}
                InputProps={inputProps()}
              />
              {errors.fullname && (
                <div className="loginError">{errors.fullname.message}</div>
              )}
            </>
          )}

          <TextField
            className="loginInput"
            name="email"
            {...register("email")}
            placeholder="Enter Your Email"
            InputProps={inputProps("email", "email")}
          />
          {errors.email && (
            <div className="loginError">{errors.email.message}</div>
          )}

          <TextField
            className="loginInput"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter Your Password"
            {...register("password")}
            InputProps={inputProps(
              "password",
              showPassword ? "text" : "password"
            )}
          />
          {errors.password && (
            <div className="loginError">{errors.password.message}</div>
          )}
          {isSignup && (
            <>
              <TextField
                className="loginInput"
                name="confirmpassword"
                type="password"
                placeholder="Confirm Your Password"
                {...register("confirmpassword")}
                InputProps={inputProps()}
              />
              {errors.confirmpassword && (
                <div className="loginError">
                  {errors.confirmpassword.message}
                </div>
              )}
            </>
          )}
          <div className="loginHelperText">
            {isSignup
              ? "Password must contain at least one uppercase, one number & one special characters"
              : "Forgort Password?"}
          </div>

          <Button type="submit" className="loginButton">
            {loading ? (
              <ReactLoading type="bubbles" color="#fff" />
            ) : isSignup ? (
              "Sign In"
            ) : (
              "Sign Up"
            )}
          </Button>
          <div className="loginOthers">
            <div className="loginHelperText">
              {isSignup ? "Already have an account?" : "Don't have an account?"}
              <span
                className="loginRegister"
                onClick={() => setSignup((on) => !on)}
              >
                {isSignup ? "Sign In" : "Sign Up"}
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
  function StyledTextField() {
    return (name, type) => ({
      disableUnderline: true,
      style: {
        fontSize: "13px",
        fontFamily: "Roboto",
        padding: "7px 0",
      },
      endAdornment:
        name === "password" ? (
          <InputAdornment position="start">
            <IconButton disableRipple onClick={handleshowpassword}>
              {type === "password" ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ) : null,
    });
  }
}
