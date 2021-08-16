import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signinSchema, signupSchema } from "./loginSchema";
import * as api from "../../../api/index";

import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { Loading, varCtx } from "../../../shared";
import Cookies from "js-cookie";

export default function Login() {
  const [isSignup, setSignup] = useState(false);
  const { loading, setLoading, Message, setMessage, setAuth } =
    useContext(varCtx);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: isSignup ? yupResolver(signupSchema) : yupResolver(signinSchema),
  });
  const history = useHistory();
  const handleshowpassword = () => setShowPassword((on) => !on);
  const inputProps = StyledTextField();

  const login = async (formdata) => {
    try {
      const { data } = await api.signin(formdata);
      Cookies.set("--t", data.token, { expires: 3, secure: true });
      Cookies.set("--n", data.data.name, { expires: 3, secure: true });
      setLoading(false);
      history.push("/dash/home");
    } catch (error) {
      const { data } = error.response;
      setMessage(data.message);
      setLoading(false);
    }
  };

  const create = async (formdata) => {
    try {
      const { data } = await api.signup(formdata);
      setMessage(data.message);
      setLoading(false);
    } catch (error) {
      const { data } = error.response;
      setMessage(data.message);
      setLoading(false);
    }
  };

  const loginSubmit = async (formdata) => {
    setLoading(true);
    if (isSignup) {
      await create(formdata);
    } else {
      await login(formdata);
    }
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
                {...register("name")}
                InputProps={inputProps()}
              />
              {errors.name && (
                <div className="loginError">{errors.name.message}</div>
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
          {Message && <div className="loginError">{Message}</div>}
          <div className="loginHelperText">
            {isSignup
              ? "Password must contain at least one uppercase, one number & one special characters"
              : "Forgort Password?"}
          </div>

          <Button type="submit" className="loginButton">
            {loading ? <Loading /> : isSignup ? "Create Account" : "Login"}
          </Button>
          <div className="loginOthers">
            <div className="loginHelperText">
              {isSignup ? "Already have an account?" : "Don't have an account?"}
              <span
                className="loginRegister"
                onClick={() => {
                  setSignup((on) => !on);
                  reset();
                  setMessage("");
                }}
              >
                {isSignup ? "Login" : "Sign Up"}
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
