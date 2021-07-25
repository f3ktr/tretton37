import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import MeetUsPage from "./components/meetUs/MeetUsPage";
import ToolsArea from "./components/meetUs/ToolsArea";
import Header from "./components/common/Header";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <ToolsArea />
    <MeetUsPage />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
