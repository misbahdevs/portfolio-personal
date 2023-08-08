import React, { useState, useEffect } from "react";
import Navbar from "../templates/navbar/Navbar";
import About from "./About/About";
import "./App.css";
import Hero from "./Hero/Hero";
import Qualification from "./Qualification/Qualification";
import GlobalProvider from "../../config/context/Context";
import Skills from "./Skills/Skills";
import Services from "./Services/Services";
import Portfolio from "./Portfolio/Portfolio";
import Testimoni from "./Testimonial/Testimoni";
import Contact from "./Contact/Contact";
import Footer from "../templates/footer/Footer";
import SyncLoader from "react-spinners/SyncLoader";
import CirclePink from "../../assets/img/icons/circle-pink.png";
import CircleBlue from "../../assets/img/icons/circle-blue.png";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return (
      <div className="App_load">
        <div className="circle-one">
          <img src={CirclePink} alt="circle" />
        </div>
        <SyncLoader
          color={"#305C85"}
          loading={loading}
          size={10}
          aria-label="Loading Spinner"
          data-testid="loader"
          className="loader"
        />
        <div className="circle-two">
          <img src={CircleBlue} alt="circle" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <div className="circle-one">
          <img src={CirclePink} alt="circle" />
        </div>
        <Navbar />
        <div className="circle-two">
          <img src={CircleBlue} alt="circle" />
        </div>
        <Hero />
        <About />
        <div className="circle-tree">
          <img src={CirclePink} alt="circle" />
        </div>
        <Qualification />
        <Skills />
        <div className="circle-for">
          <img src={CircleBlue} alt="circle" />
        </div>
        <Services />
        <div className="circle-five">
          <img src={CirclePink} alt="circle" />
        </div>
        <div className="circle-six">
          <img src={CircleBlue} alt="circle" />
        </div>
        <Portfolio />
        <Testimoni />
        <Contact />
        <div className="circle-seven">
          <img src={CirclePink} alt="circle" />
        </div>
        <div className="circle-eight">
          <img src={CircleBlue} alt="circle" />
        </div>
        <div className="circle-nine">
          <img src={CirclePink} alt="circle" />
        </div>
        <div className="circle-teen">
          <img src={CircleBlue} alt="circle" />
        </div>
        <div className="circle-21">
          <img src={CirclePink} alt="circle" />
        </div>
        <div className="circle-22">
          <img src={CircleBlue} alt="circle" />
        </div>
        <div className="circle-23">
          <img src={CirclePink} alt="circle" />
        </div>
        {/* <div className="circle-24">
          <img src={CircleBlue} alt="circle" />
        </div> */}
        {/* <div className="circle-25">
          <img src={CirclePink} alt="circle" />
        </div> */}
        <Footer />
      </div>
    );
  }
};

export default GlobalProvider(App);
