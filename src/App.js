import { lazy, Suspense } from "react";

import Bestseller from "./Components/Bestseller";
import Checkout from "./Components/Checkout";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import NewArrival from "./Components/NewArrival";
import WishList from "./Components/WishList";
import Cart from "./Components/Cart";
import Product from "./Components/Product";
import SingleProduct from "./Components/SingleProduct";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Blog from "./Components/Blog";

import ProtectedRoute from "./Components/Protected/ProtectedRoute";
import Login from "./Components/Login";
import Test from "./Components/Test";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={ <ProtectedRoute component={<Product />} />  } />
          <Route path="/cart" element={<Cart />} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<h1>Page not Found....</h1>} />
        </Routes>
      

      {/* <NewArrival/> */}
      {/* <Bestseller/> */}
      {/* <WishList/> */}
      {/* <Contact/> */}
      {/* <Checkout /> */}
      {/* <Cart/> */}
      {/* <Product/> */}
      {/* <SingleProduct /> */}


      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
