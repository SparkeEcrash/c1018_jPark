import React, { Component } from 'react';
import './App.css';
import Header from './pages/components/Header';
import Footer from './pages/components/Footer';

import Home from './pages/Home';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import Store from './pages/Store';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faIgloo, faBars, faSearch, faShoppingCart, faParachuteBox, faPhoneVolume, faDollarSign, faEnvelope, faTruck, faCommentDollar, faAward, faMap, faPhone, faStar as fasStar} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(
  faIgloo,
  faBars,
  faSearch,
  faShoppingCart,
  faParachuteBox,
  faPhoneVolume,
  faDollarSign,
  faEnvelope,
  faTruck,
  faCommentDollar,
  faAward,
  faMap,
  faPhone,
  fasStar,
  farStar,
  fab);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        {/* <Home></Home> */}
        {/* <Products></Products> */}
        {/* <SingleProduct></SingleProduct> */}
        <Store></Store>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
