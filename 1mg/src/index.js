import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AuthContext from "./AuthContext/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContext>
        <Provider store={store}>
          <App />
        </Provider>
      </AuthContext>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
