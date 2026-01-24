// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Home from "./pages/Home";
import ProductList from './pages/ProductList';
import CartPage from './pages/CartPage';
import Contact from './pages/Contact';
import Navbar from './Navbar';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/ProductList" element={<ProductList  />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
