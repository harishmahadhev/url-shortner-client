import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Routes from "./../../src/Routes";

export default function Layout() {
  return (
    <>
      <div className="layout">
        <Sidebar />
        <div className="layoutContent">
          <Routes />
        </div>
      </div>
    </>
  );
}
