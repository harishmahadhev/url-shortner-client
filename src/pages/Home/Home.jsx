import React from "react";
import "../../App.css";
import Navbar from "./Navbar";
import Land from "./Land";
export default function Home() {
  return (
    <div className="Home">
      <Navbar />
      <div className="body">
        <Land />
      </div>
      <div className="footer">
        Copyrights &#169; HasH 2021 - Tool to shorten a long link.
      </div>
    </div>
  );
}
