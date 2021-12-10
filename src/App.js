import React, { Component } from "react";
import ReactGA from "react-ga";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Impressum from "../src/Components/Impressum.js";
import Navigation from "../src/Components/Navigation.js";


import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<>
              <div className="App">
              <header id="home">
              <Navigation />
              <Header data={this.state.resumeData.main} />
                </header>
                
                <About data={this.state.resumeData.main} />
                <Resume data={this.state.resumeData.resume} />
                <Portfolio data={this.state.resumeData.portfolio} />
                <Contact data={this.state.resumeData.main} />
                <Footer data={this.state.resumeData.main} />
                </div>
              </>
              }
          ></Route>
        </Routes>

        <Routes>
          <Route
            path="/impressum"
            element={
              <>
                <Impressum />
                <Navigation />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
