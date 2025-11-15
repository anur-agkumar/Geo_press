import Nav from "../Components/Nav";
import Hero from "../Components/Hero";
import { useState } from "react";
import Menu from "../Components/Menu";
import Aboutus from "../Components/Aboutus";
import Catogories from "../Components/Catogories";
import Feature from "../Components/Feature";
import CaseStudy from "../Components/CaseStudy";
import Subscribe from "../Components/Subscribe";
import Footer from "../Components/Footer";
import Login from "./Login";
function Home() {

  const[ismenuopen,setismenuopen]=useState(false);
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full z-50">
        <Nav ismenuopen={ismenuopen} setismenuopen={setismenuopen} />
      </div>

      <div className=""> 
        <Hero />
      </div>

      {ismenuopen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-40">
          <Menu setismenuopen={setismenuopen} />
        </div>
      )}

      <Aboutus></Aboutus>
      <Catogories></Catogories>
      <Feature></Feature>
      <CaseStudy></CaseStudy>
      <Subscribe></Subscribe>
      <Footer></Footer>
      <Login></Login>
    </div>
   
  )
}

export default Home;