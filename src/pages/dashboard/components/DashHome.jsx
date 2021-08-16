import React, { useState } from "react";
import "../../../App.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useContext } from "react";
import { getHostname, Loading, userId, varCtx } from "../../../shared";
import { yupResolver } from "@hookform/resolvers/yup";
import * as api from "../../../api/index";
import { urlSchema } from "../../Home/Login/loginSchema";
import { useForm } from "react-hook-form";

export default function DashHome() {
  const [isCopied, setIsCopied] = useState(false);
  const { urlData, loading, setLoading, Message, setMessage } =
    useContext(varCtx);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(urlSchema),
  });

  const getshorturl = async (formdata) => {
    try {
      setLoading(true);
      const { data } = await api.shorturl(formdata);
      setMessage(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  const urlSubmit = (data) => {
    getshorturl(data);
  };
  return (
    <div className="dashboard">
      {loading ? (
        <Loading color="#455560" />
      ) : (
        <>
          <h2 className="pageTitle">Dashboard</h2>
          <form autoComplete="off" onSubmit={handleSubmit(urlSubmit)}>
            <div className="dashInput">
              <input
                type="text"
                name="longurl"
                placeholder="Enter your Long URL here.."
                {...register("longurl")}
              />
              <button type="submit">
                <i className="fa fa-paper-plane" aria-hidden="true"></i>
              </button>
            </div>
            {errors.name && (
              <div className="loginError">{errors.name.message}</div>
            )}
            {Message ? (
              <>
                <h2 className="dashTitle">Your URL is </h2>
                <div className="dashURL">
                  <div className="dashUrlTitle">
                    {getHostname(Message.longurl)}
                  </div>
                  <div className="dashLongUrl">
                    <a href={Message.longurl}>{Message.longurl}</a>
                  </div>
                  <div className="dashShortUrl">
                    Short URL is
                    <a href={Message.shorturl} rel="noreferrer" target="_blank">
                      {"  " + Message.shorturl}
                    </a>
                    <CopyToClipboard
                      text={Message.shorturl}
                      onCopy={onCopyText}
                    >
                      <span className="dashShortUrlButton">
                        {isCopied ? (
                          "Copied!"
                        ) : (
                          <i className="fa fa-clipboard" aria-hidden="true"></i>
                        )}
                      </span>
                    </CopyToClipboard>
                  </div>
                </div>
              </>
            ) : null}

            {/* {urlData
              .filter((e, i) => i === urlData.length - 1)
              .map((item, i) => (
                <div key={i} className="dashURL">
                  <div className="dashUrlTitle">
                    {getHostname(item.longurl)}
                  </div>
                  <div className="dashLongUrl">
                    <a href={item.longurl}>{item.longurl}</a>
                  </div>
                  <div className="dashShortUrl">
                    <a href={item.shorturl} rel="noreferrer" target="_blank">
                      {item.shorturl}
                    </a>
                    <CopyToClipboard text={item.shorturl} onCopy={onCopyText}>
                      <span className="dashShortUrlButton">
                        {isCopied ? (
                          "Copied!"
                        ) : (
                          <i className="fa fa-clipboard" aria-hidden="true"></i>
                        )}
                      </span>
                    </CopyToClipboard>
                  </div>
                </div>
              ))} */}
          </form>
          <h2 className="dashTitle">User Data</h2>
          <div className="dashRow">
            <div className="StatusItem">
              <div className="statusIcon">
                <i className="fa fa-users" aria-hidden="true"></i>
              </div>
              <div className="statusCardInfo">
                <h4>{urlData.filter((e) => e.user === userId).length}</h4>
                <span>Your Links</span>
              </div>
            </div>
            <div className="StatusItem">
              <div className="statusIcon">
                <i className="fa fa-user-plus" aria-hidden="true"></i>
              </div>
              <div className="statusCardInfo">
                <h4>
                  {urlData
                    .filter((e) => e.user === userId)
                    .reduce((a, c) => a + c.clicks, 0)}
                </h4>
                <span>Your clicks</span>
              </div>
            </div>
            <div className="StatusItem">
              <div className="statusIcon">
                <i className="fa fa-link" aria-hidden="true"></i>
              </div>
              <div className="statusCardInfo">
                <h4>{urlData.length}</h4>
                <span>Total Links</span>
              </div>
            </div>
            <div className="StatusItem">
              <div className="statusIcon">
                <i className="fa fa-binoculars" aria-hidden="true"></i>
              </div>
              <div className="statusCardInfo">
                <h4>{urlData.reduce((a, c) => a + c.clicks, 0)}</h4>
                <span>Total Clicks</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
