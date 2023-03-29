import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'

import Home from "./Pages/Home";
import Contact from './Pages/Contact'
import Cart from './Pages/Cart'
import Service from './Pages/Service'
import Checkout from './Pages/Checkout'
import Login from './Pages/Login';
import Throw404 from './Pages/Throw404';

import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/service" element={<Service />} />
          <Route path="/service/:id" element={<Service />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path='*' element={<Throw404/>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
