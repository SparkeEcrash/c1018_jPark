import React from 'react'
import FeaturedProducts from './components/FeaturedProducts';
import NewsLetter from './components/NewsLetter';
import Skills from './components/Skills';
import ProductsBanner from './Products/ProductsBanner';
import ProductCatalog from './Products/ProductCatalog';

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