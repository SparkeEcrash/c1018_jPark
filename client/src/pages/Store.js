import React from 'react';
import StoreBanner from './Store/StoreBanner';
import StoreCheckoutList from './Store/StoreCheckoutList';
import FeaturedProducts from './components/FeaturedProducts';
import NewsLetter from './components/NewsLetter';
import Skills from './components/Skills';

const Store = () => {
  return (
    <div>
      <StoreBanner></StoreBanner>
      <StoreCheckoutList></StoreCheckoutList>
      <FeaturedProducts></FeaturedProducts>
      <NewsLetter></NewsLetter>
      <Skills></Skills>
    </div>
  )
}

export default Store;