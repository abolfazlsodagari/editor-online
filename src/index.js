import "./index.css";
// Built-in import
import React from "react";
import ReactDOM from "react-dom";
// Internal import
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import EditorProvider from "./context/EditorProvider";

ReactDOM.render(
  <React.StrictMode>
    <EditorProvider>
      <App />
    </EditorProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
