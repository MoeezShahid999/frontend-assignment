import React from "react";
import "./App.css";
import { Router } from "react-router-dom";
import history from "./history";
import MainComponent from "../components/MainComponent/mainComponent";

function App() {
  return (
    <Router history={history}>
      <MainComponent />
    </Router>
  );
}

export default App;
