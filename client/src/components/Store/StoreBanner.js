import React from 'react';
import './StoreBanner.css';

const StoreBanner = () => {
  return (
    <div className="banner-products d-flex align-items-center justify-content-center pl-3 pl-lg-5 text-center">
      <div>
        <h1 className="text-capitalize text-yellow text-slanted display-4">comfy sloth</h1>
        <h1 className="text-capitalize font-weight-bold display-4">our products</h1>
      </div>
    </div>
  )
}

export default StoreBanner;