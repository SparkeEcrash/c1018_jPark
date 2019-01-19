import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/layout';
import Auth from './hoc/auth';

import Home from './components/Home';
import Checkout from './components/Checkout';
import SingleProduct from './components/SingleProduct';
import Store from './components/Store';
import Login from './components/Login';
import Register from './components/Register';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
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
  faStar as fasStar
} from '@fortawesome/free-solid-svg-icons';
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
  fab
);

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/checkout" exact component={Checkout} />
        <Route path="/single_product" exact component={SingleProduct} />
        <Route path="/store" exact component={Store} /> 

        <Route path="/login" exact component={Auth(Login, false)} /> 
        <Route path="/register" exact component={Auth(Register, false)} /> 
      </Switch>
    </Layout>
  );
};

export default Routes;
