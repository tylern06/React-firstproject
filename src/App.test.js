import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//This test mounts a component and makes sure that it didn’t throw during rendering.
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});
