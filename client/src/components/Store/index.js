import React from 'react';
import StoreBanner from './StoreBanner';
import StoreCheckoutList from './StoreCheckoutList';
import FeaturedProducts from '../Shared/FeaturedProducts';
import NewsLetter from '../Shared/NewsLetter';
import Skills from '../Shared/Skills';

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