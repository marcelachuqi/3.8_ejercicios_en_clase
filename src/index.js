import React from "react"; //importar la librería de react
import ReactDOM from "react-dom"; //importar react-dom para que react genere el html
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
