import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Home } from "./js/components/Home";
import { About } from "./js/components/About";
import { Extra } from "./js/components/Extra";

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <p>This is my test site for practising</p>
        <About />
        <Extra />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
