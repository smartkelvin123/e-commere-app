import react from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
  // Navigate,
} from "react-router-dom";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Cart from "./component/Cart";
import Notfound from "./component/Notfound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/not-found" element={<Notfound />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
