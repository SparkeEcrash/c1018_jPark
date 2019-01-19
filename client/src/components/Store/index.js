import React from 'react'
import StoreBanner from './StoreBanner';
import StoreCatalog from './StoreCatalog';
import FeaturedProducts from '../Shared/FeaturedProducts';
import NewsLetter from '../Shared/NewsLetter';
import Skills from '../Shared/Skills';

const Store = () => {
  return (
    <div>
      <StoreBanner></StoreBanner>
      <StoreCatalog></StoreCatalog>
      <FeaturedProducts></FeaturedProducts>
      <NewsLetter></NewsLetter>
      <Skills></Skills>
    </div>
  )
}

export default Store;