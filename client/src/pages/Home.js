import React from 'react'
import HomeBanner from './Home/HomeBanner';
import HomeFeatures from './Home/HomeFeatures';
import HomeCategories from './Home/HomeCategories';
import HomeFiller from './Home/HomeFiller';
import FeaturedProducts from './components/FeaturedProducts';
import NewsLetter from './components/NewsLetter';
import Skills from './components/Skills';

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