import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";

import Users from "./components/Users";
import Layout from "./components/Layout";
import User from "./components/User";
import Error404 from "./components/Error404";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />}>
            
             </Route>
          <Route path="about" element={<About />}>

      
const App = () => {
  return (
    <div>

    </div>
  )
}

export default App
