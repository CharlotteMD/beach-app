import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Home } from "./js/components/Home";

class App extends Component {
  render() {
    return (
      <>
        <Home />
        <p>This is my test site for practising</p>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
