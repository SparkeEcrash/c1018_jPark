import React from 'react'
import SingleProductsBanner from './SingleProducts/SingleProductsBanner'
import SingleProductView from './SingleProducts/SingleProductView'
import FeaturedProducts from './components/FeaturedProducts';
import NewsLetter from './components/NewsLetter';
import Skills from './components/Skills';

const SingleProduct = () => {
  return (
    <div>
      <SingleProductsBanner></SingleProductsBanner>
      <SingleProductView></SingleProductView>
      <FeaturedProducts></FeaturedProducts>
      <NewsLetter></NewsLetter>
      <Skills></Skills>
    </div>
  )
}

export default SingleProduct;