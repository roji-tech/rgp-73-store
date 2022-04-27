import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Component import
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Home from './components/Home';
import Wrapper from './components/Wrapper';
import Product from './components/Product';
import Products from './components/Products';

// CSS import
import './App.css';

function App() {
  return (
    <BrowserRouter>


      <Routes>
        <Route path='rgp-73-store' element={<Wrapper />} >
          <Route index element={<Home />} />
          <Route path='/rgp-73-store/about' element={<About />} />
          <Route path='/rgp-73-store/products' element={<Products />} >
            <Route index path='/rgp-73-store/products' element={<Products />} />
            <Route path='/rgp-73-store/products/:productId' element={<Product />} />
          </Route>
          <Route path='/rgp-73-store/contact' element={<Contact />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
  
    </BrowserRouter >
  );
}

export default App;
