import React from 'react';
import Home from "./components/home/Home";
import Products from './components/products/Products';
import Details from './components/details/Details';
import Overview from './components/overview/Overview';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Home />
      <Products />
      <Details />
      <Overview />
      <Footer />
    </div>
  );
}

export default App;
