/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 


const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
