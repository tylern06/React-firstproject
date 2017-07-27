import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Components/Header/Header.js";
import Home from "./Components/Home/Home.js";
import Nested from "./Components/Nested/Nested.js";
import Params from "./Components/Params/Params.js";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          {/* <h2>React App</h2> */}
          <Route exact path="/" component={Home} />
          <Route path="/nested" component={Nested} />
          <Route path="/params" component={Params} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
