import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import * as api from "../../../api/index";
import "../../../App.css";
import { Loading, Logo, varCtx } from "../../../shared";
export const Activate = () => {
  const { token } = useParams();
  const { loading, setLoading, Message, setMessage } = useContext(varCtx);
  const history = useHistory();
  const handleActivateSubmit = async () => {
    const request = { token };
    setLoading(true);
    try {
      const { data } = await api.activate(request);
      setMessage(data.message);
      history.push("/");
      setLoading(false);
    } catch (error) {
      const { data } = error.response;
      setLoading(false);
      setMessage(data.message);
    }
  };
  return (
    <div className="activateContainer">
      <Logo />
      <div className="loginContainer Activate">
        <h4>Activate your Url-Shortner Account</h4>
        <Button className="loginButton" onClick={handleActivateSubmit}>
          {loading ? <Loading /> : "Activate"}
        </Button>
        {Message && <div className="HelperText loginError">{Message}</div>}
        <div className="footer">
          Copyrights &#169; HasH 2021 - Tool to shorten a long link.
        </div>
      </div>
    </div>
  );
};
