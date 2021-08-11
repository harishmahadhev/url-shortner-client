import React from "react";
import "./App.css";
import logo from "./images/logo.svg";
import logo2 from "./images/logo2.svg";
import easy from "./images/easy.svg";
import device from "./images/devices.svg";
import reliable from "./images/reliable.svg";
import security from "./images/security.svg";
import shortend from "./images/shortend.svg";
import statistics from "./images/statistics.svg";
import Login from "./Login";

export default function Land() {
  return (
    <>
      <div className="odd">
        <div className="container land">
          <div className="landLeft">
            <h1 className="landTitle">Short links, big results</h1>
            <h3 className="landText">
              A URL shortener built with powerful tools to help you grow and
              protect your brand.
            </h3>
          </div>
          <div className="landRight">
            <div>
              <Login />
            </div>
          </div>
        </div>
      </div>
      <div className="even">
        <div className="container land">
          <div className="landLeft">
            <h1 className="landTitle">Simple and fast URL shortener!</h1>
            <h3 className="landText">
              ShortURL allows to reduce long links from Instagram, Facebook,
              YouTube, Twitter, Linked In and top sites on the Internet, just
              paste the long URL and click the Shorten URL button. On the next
              screen, copy the shortened URL and share it on websites, chat and
              e-mail. After shortening the URL, check how many clicks it
              received.
            </h3>
          </div>
          <div className="landRight">
            <img className="landImage" src={logo} alt="land" />
          </div>
        </div>
      </div>
      <div className="odd">
        <div className="container land">
          <div className="landLeft left">
            <img className="landImage left" src={logo2} alt="land" />
          </div>
          <div className="landRight right">
            <h1 className="landTitle">Shorten, share and track</h1>
            <h3 className="landText">
              Your shortened URLs can be used in publications, documents,
              advertisements, blogs, forums, instant messages, and other
              locations
            </h3>
          </div>
        </div>
      </div>
      <div className="even">
        <div className="container land">
          <ul className="landList">
            <li className="landListItem">
              <img className="landListIcon" src={easy} alt="" />
              <h3 className="LandListTitle">Ease</h3>
              <p className="landListText">
                ShortURL is easy and fast, enter the long link to get your
                shortened link
              </p>
            </li>
            <li className="landListItem">
              <img className="landListIcon" src={shortend} alt="" />
              <h3 className="LandListTitle">Shortened</h3>
              <p className="landListText">
                Use any link, no matter what size, ShortURL always shortens
              </p>
            </li>
            <li className="landListItem">
              <img className="landListIcon" src={security} alt="" />
              <h3 className="LandListTitle">Secure</h3>
              <p className="landListText">
                It is fast and secure, our service have HTTPS protocol and data
                encryption
              </p>
            </li>
          </ul>
          <ul className="landList">
            <li className="landListItem">
              <img className="landListIcon" src={statistics} alt="" />
              <h3 className="LandListTitle">Statistics</h3>
              <p className="landListText">
                Check the amount of clicks that your shortened url received
              </p>
            </li>
            <li className="landListItem">
              <img className="landListIcon" src={reliable} alt="" />
              <h3 className="LandListTitle">Reliable</h3>
              <p className="landListText">
                All links that try to disseminate spam, viruses and malware are
                deleted
              </p>
            </li>
            <li className="landListItem">
              <img className="landListIcon" src={device} alt="" />
              <h3 className="LandListTitle">Devices</h3>
              <p className="landListText">
                Compatible with smartphones, tablets and desktop
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="odd">
        <div className="container land last">
          <h1 className="landTitle LandListTitle">
            The link shortener that has your brand’s back
          </h1>
          <h3 className="landText">
            Your brand wasn’t built to be hidden. Help it stand out with branded
            links that drive 34% more clicks.
          </h3>
          <button className="landTButton">Get Started</button>
        </div>
      </div>
    </>
  );
}
