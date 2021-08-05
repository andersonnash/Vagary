import React from "react";
import NavBar from "../navbar/NavBar.jsx";
import ImgSlide from "./ImgSlide.js";
import { SlideData } from "./views/home/SlideData";


export default function Home(Props) {
  return (
    <div className="HomePage">
      {/* <NavBar /> */}
      <ImgSlide />
      <SlideData />
      {/* <Footer /> */}
    </div>
  )
}