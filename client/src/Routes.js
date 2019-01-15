import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./hoc/layout";

import Home from "./components/Home";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
import Store from "./components/Store";

import { library } from "@fortawesome/fontawesome-svg-core";
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
} from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

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
        <Route path="/products" exact component={Products} />
        <Route path="/single_product" exact component={SingleProduct} />
        <Route path="/store" exact component={Store} /> 
      </Switch>
    </Layout>
  );
};

export default Routes;
