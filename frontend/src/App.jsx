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
import Register from "./auth/register";
import Login from "./auth/login";
import CheckoutSuccess from "./component/CheckoutSuccess";
import Dashboard from "./component/admin/Dashboard";
import Products from "./component/admin/Products";
import Summary from "./component/admin/Summary";
import CreateProducts from "./component/admin/CreateProducts";

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
        <Route path="/checkout-success" element={<CheckoutSuccess />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/admin" element={<Dashboard />}>
          <Route path="products" element={<Products />}>
            <Route path="create-product" element={<CreateProducts />} />
          </Route>
          <Route path="summary" element={<Summary />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
