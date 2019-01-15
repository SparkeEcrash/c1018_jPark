import React, { Component } from 'react';
import './HomeBanner.css';

// change this to carousel

class HomeBanner extends Component {
  render() {
    return (
      <div className="banner d-flex align-items-center pl-3 pl-lg-5">
        <div>
          <h1 className="text-capitalize text-slanted mb-0">minimalist</h1>
          <h1 className="text-lowercase font-weight-bold">interior style</h1>
          <a href="products.html" className="btn btn-yellow">
            view collection
          </a>
        </div>
      </div> 
    )
  }
}

export default HomeBanner;


