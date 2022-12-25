import React, { useState, useEffect, CSSProperties } from "react";
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

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  if (loading) {
    return (
      <div className="App_load">
        <div className="circle-one"></div>
        <SyncLoader
          color={"#305C85"}
          loading={loading}
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
          className="loader"
        />
        <div className="circle-two"></div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <div className="circle-one"></div>
        <Navbar />
        <div className="circle-two"></div>
        <Hero />
        <About />
        <div className="circle-tree"></div>
        <Qualification />
        <Skills />
        <div className="circle-for"></div>
        <Services />
        <div className="circle-five"></div>
        <div className="circle-six"></div>
        <Portfolio />
        <Testimoni />
        <Contact />
        <Footer />
      </div>
    );
  }
};

export default GlobalProvider(App);
