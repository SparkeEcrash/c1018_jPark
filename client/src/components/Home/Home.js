import React, { Component } from 'react';
import './HomeBackground.css';

// change this to carousel

export class Home extends Component {
  render() {
    return (
      <div className="home-banner d-flex flex-row-reverse align-items-baseline align-items-sm-center pr-3 pr-sm-5 pt-3 pt-sm-0">
        <div className="text-right">
          <h1 className="banner-title text-lowercase">Gityo Amiibo</h1>
          <h4 className="text-capitalize text-slanted">Site for Amiibo Hunters</h4>
          <a href="store" className="btn btn-yellow">
            view collection
          </a>
        </div>
      </div> 
    )
  }
}

export default Home;


