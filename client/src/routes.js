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

import UserDashboard from './components/User/UserDashboard';

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
  faStar as fasStar,
  faUser,
  faUsers,
  faKey,
  faLock,
  faHandPointRight,
  faAngleDown,
  faAngleUp

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
  faUser,
  faUsers,
  faKey,
  faLock,
  faHandPointRight,
  faAngleDown,
  faAngleUp,

  fab
);

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Auth(Home, null)} />
        <Route path="/checkout" exact component={Auth(Checkout, true)} />
        <Route path="/product_detail/:id" exact component={Auth(SingleProduct, true)} />
        <Route path="/store" exact component={Auth(Store, null)} /> 

        <Route path="/login" exact component={Auth(Login, false)} /> 
        <Route path="/register" exact component={Auth(Register, false)} />
        
        <Route path="/user/dashboard" exact component={Auth(UserDashboard, true)} /> 
      </Switch>
    </Layout>
  );
};

export default Routes;
