import './App.css';
import Login from './components/Pages/Login';
import { Route, Routes } from 'react-router-dom';
import Welcome from './components/Pages/Welcome';
import Cart from './components/Cart/Cart';
import Payment from './components/Pages/Payment';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './components/Pages/Home';
import CartProvider from './store/CartProvider';
import ProductPage from './components/Pages/ProductPage';
import Register from './components/Pages/Register';
import About from './components/Pages/About';

function App() {
  
  return (
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Welcome numb={4} />} />
        <Route path="/allproducts" element={<Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="/allproducts/:id" element={<ProductPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      
       
      
      <Footer />
    </CartProvider>
  );
}

export default App;
