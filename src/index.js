import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom"
import { BrowserRouter } from "react-router-dom";

//component file
import TodoContainer from "./components/TodoContainer";

//stylesheet
import "./App.css";

ReactDOM.render(
  <BrowserRouter>
    <TodoContainer />
  </BrowserRouter>,
  document.getElementById("root")
);
