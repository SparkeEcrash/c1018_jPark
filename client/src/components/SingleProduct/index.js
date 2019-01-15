import React from 'react'
import SingleProductsBanner from './SingleProductsBanner'
import SingleProductView from './SingleProductView'
import FeaturedProducts from '../Shared/FeaturedProducts';
import NewsLetter from '../Shared/NewsLetter';
import Skills from '../Shared/Skills';

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