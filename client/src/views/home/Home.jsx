import React from "react";
import NavBar from "../navbar/NavBar.jsx";
import ImgSlide from "./ImgSlide.js";
import { SlideData } from "./views/home/SlideData";
import Layout from "../../components/Layout/Layout";


export default function Home(Props) {
  return (
  <Layout>
    <div className="HomePage">
      {/* <NavBar /> */}
      
      <ImgSlide slides={SlideData} />
      <SlideData />
      {/* <Footer /> */}
    </div>
    </Layout>
  )
}