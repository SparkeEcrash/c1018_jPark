import React from 'react'
import ProductsBanner from './ProductsBanner';
import ProductCatalog from './ProductCatalog';
import FeaturedProducts from '../Shared/FeaturedProducts';
import NewsLetter from '../Shared/NewsLetter';
import Skills from '../Shared/Skills';

const Products = () => {
  return (
    <div>
      <ProductsBanner></ProductsBanner>
      <ProductCatalog></ProductCatalog>
      <FeaturedProducts></FeaturedProducts>
      <NewsLetter></NewsLetter>
      <Skills></Skills>
    </div>
  )
}

export default Products;