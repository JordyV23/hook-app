import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
//import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
//import { CounterApp } from "./01-useState/CounterApp";
//import {HooksApp} from './HooksApp'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <HooksApp/> */}
    {/* <CounterApp/> */}
    {/* <CounterWithCustomHook /> */}
    {/* <SimpleForm /> */}

    <FormWithCustomHook/>
  </React.StrictMode>
);
