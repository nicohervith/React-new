import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import ConceptosBasicos from "./Components/ConceptosBasicos";

function App() {
  return (
    <div>
      <h1> React Router </h1>
      <a
        href="https://v5.reactrouter.com/web/guides/quick-start"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        Documentacion
      </a>
      <hr />
      <ConceptosBasicos />
    </div>
  );
}

export default App;
