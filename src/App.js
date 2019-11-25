import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      {/* <body>
        <div id="root"></div>
      </body> */}

      <Message />

      <Greet name="Dragana" surname="Savanovic">
        <p>This is children props</p>
      </Greet>
      <Greet name="GaGa" surname="Savanovic">
        <button>Action</button>
      </Greet>
      <Greet surname="Savanovic" />

      <Welcome name="Dragana" surname="Savanovic">
        <p>This is children props</p>
      </Welcome>
      <Welcome name="GaGa" surname="Savanovic">
        <button>Action</button>
      </Welcome>
    </div>
  );
}

export default App;
