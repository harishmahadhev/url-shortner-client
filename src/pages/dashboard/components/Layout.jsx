import React from "react";
import Sidebar from "../sidebar/Sidebar";
import DashRoutes from "../DashRoutes";
import { Route } from "react-router-dom";
import "../../../App.css";
import Topnav from "./../topnav/Topnav";
export default function Layout() {
  return (
    <Route
      render={(props) => (
        <div className="layout">
          <Sidebar {...props} />
          <div className="layoutContent">
            <Topnav />
            <div className="layoutContentMain">
              <DashRoutes />
            </div>
          </div>
        </div>
      )}
    ></Route>
  );
}
