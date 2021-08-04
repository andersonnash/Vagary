import React from "react";
import { Route } from "react-router-dom";
import NavBar from "../navbar/NavBar.jsx";


export default function Home(Props) {
  return (
    <div className="HomePage">
      <NavBar />
      
      <Footer />
    </div>
  )
}