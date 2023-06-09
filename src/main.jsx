// import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./08-useReducer/intro-reducer";
import { TodoApp } from "./08-useReducer/TodoApp";
import { MainApp } from "./09-useContext/MainApp";

//import { CallbackHook } from "./06-memos/CallbackHook";
//import { Memorize } from "./06-memos/Memorize";
//import { MemoHook } from "./06-memos/MemoHook";
//import { FocusScreen } from "./04-useRef/FocusScreen";
//import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
//import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
//import { SimpleForm } from "./02-useEffect/SimpleForm";
//import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
//import { CounterApp } from "./01-useState/CounterApp";
//import {HooksApp} from './HooksApp'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <HooksApp/>
  // <CounterApp/>
  // <CounterWithCustomHook />
  // <SimpleForm />
  // <FormWithCustomHook/>
  // <MultipleCustomHooks/>
  // <FocusScreen />
  // <Memorize />
  // <MemoHook/>
  // <CallbackHook />
  // <TodoApp/>

  <BrowserRouter>
    <MainApp />
  </BrowserRouter>
);
