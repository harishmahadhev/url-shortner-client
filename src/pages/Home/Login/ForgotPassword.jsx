import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import resetLogo from "../../../images/forgot.png";
import { Button, TextField } from "@material-ui/core";
import * as api from "../../../api/index.js";
import { Loading, varCtx } from "../../../shared";
import { forgotSchema } from "./loginSchema";

export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgotSchema),
  });
  const { loading, setLoading, Message, setMessage } = useContext(varCtx);

  const forgot = async (formdata) => {
    try {
      const { data } = await api.forgot(formdata);
      setMessage(data.message);
      setLoading(false);
    } catch (error) {
      const { data } = error.response;
      setMessage(data.message);
      setLoading(false);
    }
  };

  const resetSubmit = (data) => {
    forgot(data);
  };

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
            <h3 className="resetTitle">Forgot Password ?</h3>
            <h5 className="resetDetails">
              Enter your Email to send the password reset link
            </h5>
            <TextField
              className="loginInput"
              name="email"
              {...register("email")}
              placeholder="Enter Your Email"
              InputProps={{
                disableUnderline: true,
                style: {
                  fontSize: "13px",
                  fontFamily: "Roboto",
                  padding: "7px 0",
                },
              }}
            />
            {errors.email && (
              <div className="loginError">{errors.email.message}</div>
            )}
            <Button type="submit" className="loginButton">
              {loading ? <Loading /> : " Send Link"}
            </Button>
            <div className="loginError"> {Message ? Message : ""}</div>
          </form>
        </div>
      </div>
    </div>
  );
}
