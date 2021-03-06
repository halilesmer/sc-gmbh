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
import OurCustomer from "./Components/OurCustomer";
import LogisticsServices from "./Components/LogisticsServices";
import Contact from "./Components/Contact";
import Strengths from "./Components/Strengths";
import ErrorPage from "./Components/ErrorPage.js";

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
            element={
              <>
                <div className="App">
                  <header id="home">
                    <Navigation
                      start="Start"
                      about="Über Uns"
                      logistic="LOGISTIKDIENSTLEISTUNGEN"
                      ourCustomer="Unsere Kunden"
                      ourStrengths="Unsere Stärken"
                      contact="Kontakt"
                    />
                    <Header data={this.state.resumeData.main} />
                  </header>

                  <About data={this.state.resumeData.main} />
                  <LogisticsServices
                    data={this.state.resumeData.logisticsServices}
                  />
                  <OurCustomer data={this.state.resumeData.main} />
                  <Strengths data={this.state.resumeData.strengths} />
                  <Contact data={this.state.resumeData.main} />
                  <Footer data={this.state.resumeData.main} />
                </div>
              </>
            }
          ></Route>
          <Route
            path="/impressum"
            element={
              <>
                <Navigation start={"Home"} />
                <Impressum data={this.state.resumeData.main}/>
                <Footer data={this.state.resumeData.main} />
              </>
            }
          ></Route>
          {/* error page  start */}
          <Route
            path="*"
            element={
              <>
                <Navigation start={'Home'} />
                <ErrorPage data={this.state.resumeData.errorPage} />
              </>
            }
          ></Route>
          {/*error page  ends */}
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
