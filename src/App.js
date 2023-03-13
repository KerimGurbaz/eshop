import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";

import Users from "./components/Users";
import Layout from "./components/Layout";
import User from "./components/User";
import Error404 from "./components/Error404";
import Home from "./components/Home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
const App = () => {
  return (
    <div>

    </div>
  )
}

export default App
