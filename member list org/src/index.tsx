import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import { MyContextProvider } from "./core/myContext";
ReactDOM.render(
  <div>
    <MyContextProvider>
      <App />
    </MyContextProvider>
  </div>,
  document.getElementById("root")
);
