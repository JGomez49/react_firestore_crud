
import React from "react";
import Links from "./components/Links";
import "./App.css";
import logo from '../src/logo.svg'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="row">
          <Links/>
        </div>
      </header>
      <ToastContainer />
    </div>
  );
}

export default App;
