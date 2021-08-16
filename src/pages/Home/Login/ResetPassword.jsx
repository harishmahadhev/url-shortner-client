import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import resetLogo from "../../../images/reset.png";
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import * as api from "../../../api/index.js";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useHistory, useParams } from "react-router-dom";
import { resetSchema } from "./loginSchema";
import { Loading, varCtx } from "../../../shared";

export default function ResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(resetSchema),
  });
  const { token } = useParams();
  const history = useHistory();
  const { loading, setLoading, Message, setMessage } = useContext(varCtx);
  const reset = async (formdata) => {
    setLoading(true);
    try {
      const { data } = await api.reset(formdata);
      setMessage(data.message);
      setLoading(false);
      setTimeout(() => {
        history.push("/");
      }, 1000);
    } catch (error) {
      const { data } = error.response;
      setMessage(data.message);
      setLoading(false);
    }
  };

  const resetSubmit = (data) => {
    data.token = token;
    reset(data);
  };
  const handleshowpassword = () => setShowPassword((on) => !on);
  const [showPassword, setShowPassword] = useState(false);
  const inputProps = StyledTextField();

  return (
    <div className="activateContainer">
      <div className="loginContainer">
        <div className="loginLeft">
          <img src={resetLogo} className="loginImg" alt="" />
        </div>
        <div className="loginRight">
          <form
            className="loginForm"
            autoComplete="off"
            onSubmit={handleSubmit(resetSubmit)}
          >
            <h3 className="resetTitle">Password Reset</h3>
            <h5 className="resetDetails">Enter New Password</h5>

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
            <TextField
              className="loginInput"
              name="confirmpassword"
              type="password"
              placeholder="Confirm Your Password"
              {...register("confirmpassword")}
              InputProps={inputProps()}
            />
            {errors.confirmpassword && (
              <div className="loginError">{errors.confirmpassword.message}</div>
            )}
            <Button type="submit" className="loginButton">
              {loading ? <Loading /> : "Reset Password"}
            </Button>
            <div className="loginError"> {Message ? Message : ""}</div>
          </form>
        </div>
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
