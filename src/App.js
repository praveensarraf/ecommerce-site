import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Login from './components/Login';
import Index from './components/Index';
import Trending from './components/Trending';
import Offer from './components/Offer';

function App() {
  const [isChecked, setIsChecked] = useState(false);

  const initialCount = {
    tshirt: 0,
    jeans: 0,
    shirt: 0,
    shoes: 0,
    tshirt2: 0,
    jeans2: 0,
    shirt2: 0,
    shoes2: 0,
    iPhone: 0,
    laptop: 0,
    sunglass: 0,
    handBag: 0
  };

  const [count, setCount] = useState(initialCount);
  const [prevCount, setPrevCount] = useState(initialCount);
  const [cartTotal, setCartTotal] = useState(0);

  const handleCountPlus = (product) => {
    setCount((lastCount) => ({
      ...lastCount,
      [product]: lastCount[product] + 1
    }));
  };

  const handleCountMinus = (product) => {
    setCount((lastCount) => ({
      ...lastCount,
      [product]: lastCount[product] > 0 ? lastCount[product] - 1 : 0
    }));
  };

  const addToCart = () => {
    let total = Object.values(count).reduce((a, b) => a + b, 0);
    setCartTotal(total);
    console.log(`Cart Updated. Total items in Cart: ${total}`);
  };

  useEffect(() => {
    Object.keys(count).forEach(product => {
      if (count[product] !== prevCount[product]) {
        console.log(`${product} count updated to ${count[product]}`);
      }
    });
    setPrevCount(count);
  }, [count, prevCount]);
  

  return (
    <>
      <BrowserRouter>
        <Navbar isChecked={isChecked} setIsChecked={setIsChecked} cartTotal={cartTotal} />
        <Offer/>
        
        <Routes>
          
          <Route path="/" element={<Index count={count} handleCountPlus={handleCountPlus} handleCountMinus={handleCountMinus} addToCart={addToCart}/>} />

          <Route path="/Login" element={<Login />} />

          <Route path="/Trending" element={<Trending count={count} handleCountPlus={handleCountPlus} handleCountMinus={handleCountMinus} addToCart={addToCart} />} />

          <Route element={isChecked ? <Navigate to="/Trending" /> : <Navigate to="/" />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
