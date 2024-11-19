import { createRoot } from "react-dom/client";
import HomePage from "./Landing_Page/Home/HomePage";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "./index.css";
import Signup from './Landing_Page/SignUp/Signup'
import About from './Landing_Page/About/AboutPage'
import Product from './Landing_Page/Product/ProductPage'
import Pricing from "./Landing_Page/Home/Pricing";
import Support from "./Landing_Page/Support/SupportPage"
import Navbar from "./Landing_Page/Navbar";
import Footer from "./Landing_Page/Footer";
import NotFound from "./Landing_Page/NotFound";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar/>
  <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/product" element={<Product/>} />
    <Route path="/pricing" element={<Pricing/>} />
    <Route path="/support" element={<Support/>} />
    <Route path="*" element={<NotFound/>} />
  </Routes>
  <Footer/>
  </BrowserRouter>
);
