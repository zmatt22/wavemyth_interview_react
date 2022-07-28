import './assets/styles/site.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Spaceships from './pages/Spaceships';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import React, { useState } from 'react';
import { CartContext } from './components/CartContext';


function App() {
  const [cartContent, setCartContent] = useState([]);
  
  return (
    <div className="App">
      <BrowserRouter>
        <CartContext.Provider value={{cartContent, setCartContent}}>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/destinations' element={<Destinations />} />
            <Route path='/spaceships' element={<Spaceships />} />
          </Routes>
        </CartContext.Provider>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
