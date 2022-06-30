import './App.css';
import { Fragment } from 'react';
import Login from './components/Pages/Login';
import { Route, Routes } from 'react-router-dom';
import Welcome from './components/Pages/Welcome';
import Cart from './components/Cart/Cart';
import Payment from './components/Pages/Payment';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './components/Pages/Home';
import ProductList from './components/Products/ProductList';

function App() {
  return (
    <Fragment>
      <Header/>
      <Routes>
       <Route path="/" element={<Home/>}/> 
       <Route path="/login" element={<Login/>}/> 
       <Route path="/welcome" element={<Welcome/>}/> 
       <Route path="/allproducts" element={<ProductList/>}/> 
       <Route path="/cart" element={<Cart/>}/> 
       <Route path="/payment" element={<Payment />}/> 
      </Routes>
      <Footer/>
    </Fragment>
  );
}

export default App;
