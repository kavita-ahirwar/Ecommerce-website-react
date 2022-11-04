import { React } from "react";
import "./App.css";
import {
  Footers,
  HeaderFirst,
  HeaderSecond,
  HeaderThird,
} from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import {Inventory} from './components/Inventory/Inventory';

function App() {
  return (
  <Router>
      <HeaderFirst />
      <HeaderSecond />
      <HeaderThird />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventory" element={<Inventory/>}/>
        </Routes>
      <Footers />
    </Router>
  );
}

export default App;
