import React from "react";
import "./App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Land from "./Land";
export default function Home() {
  return (
    <div className="Home">
      <Navbar />
      <div className="body">
        <Land />
      </div>
      <Footer />
    </div>
  );
}
