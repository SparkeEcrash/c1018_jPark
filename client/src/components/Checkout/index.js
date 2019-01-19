import React from 'react';
import CheckoutBanner from './CheckoutBanner';
import CheckoutList from './CheckoutList';
import FeaturedProducts from '../Shared/FeaturedProducts';
import NewsLetter from '../Shared/NewsLetter';
import Skills from '../Shared/Skills';

const Store = () => {
  return (
    <div>
      <CheckoutBanner></CheckoutBanner>
      <CheckoutList></CheckoutList>
      <FeaturedProducts></FeaturedProducts>
      <NewsLetter></NewsLetter>
      <Skills></Skills>
    </div>
  )
}

export default Store;