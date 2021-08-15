import React, { useState } from "react";
import "../../../App.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import statusItems from "../../../json/status_card.json";

export default function DashHome() {
  const [isCopied, setIsCopied] = useState(false);

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  const getDomain = (url) => {
    let domain = new URL(url);
    domain = domain.hostname;
    console.log(domain);
  };
  return (
    <div className="dashboard">
      <h2 className="pageTitle">Dashboard</h2>
      <h2 className="dashTitle">User Data</h2>
      <div className="dashRow">
        {statusItems.map((e, i) => (
          <div key={i} className="StatusItem">
            <div className="statusIcon">
              <i className={e.icon} aria-hidden="true"></i>
            </div>
            <div className="statusCardInfo">
              <h4>{e.count}</h4>
              <span>{e.title}</span>
            </div>
          </div>
        ))}
      </div>
      <form>
        <div className="dashInput">
          <input type="text" placeholder="Enter Long URL here.." />
          <button
            type="button"
            onClick={() => getDomain("https://bit.ly/3m4yjaW")}
          >
            <i className="fa fa-paper-plane" aria-hidden="true"></i>
          </button>
        </div>

        <div className="dashURL">
          <div className="dashUrlTitle">
            https://blog.kiprosh.com/using-url-previews-in-your-web-apps-using-javascript/
          </div>
          <div className="dashLongUrl">
            <a href="https://bit.ly/3m4yjaW">
              https://blog.kiprosh.com/using-url-previews-in-your-web-apps-using-javascript/
            </a>
          </div>
          <div className="dashShortUrl">
            <a href="https://bit.ly/3m4yjaW">https://bit.ly/3m4yjaW</a>
            <CopyToClipboard text={"codeSnippet"} onCopy={onCopyText}>
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
      </form>
    </div>
  );
}
