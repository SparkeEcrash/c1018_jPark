import React from 'react'
import HomeBanner from './HomeBanner';
import HomeFeatures from './HomeFeatures';
import HomeCategories from './HomeCategories';
import HomeFiller from './HomeFiller';
import FeaturedProducts from '../Shared/FeaturedProducts';
import NewsLetter from '../Shared/NewsLetter';
import Skills from '../Shared/Skills';

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <HomeFeatures></HomeFeatures>
      <HomeCategories></HomeCategories>
      <HomeFiller></HomeFiller>
      <FeaturedProducts></FeaturedProducts>
      <NewsLetter></NewsLetter>
      <Skills></Skills>
    </div>
  )
}

export default Home;