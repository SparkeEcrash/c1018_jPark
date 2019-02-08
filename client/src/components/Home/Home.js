import React, { Component } from 'react';
import './HomeBackground.css';

// change this to carousel

export class Home extends Component {
  render() {
    return (
      <div className="home_background d-flex flex-row-reverse align-items-baseline align-items-sm-center pr-3 pr-sm-5 pt-3 pt-sm-0">
        <div className="text-right">
          <h1 className="text-lowercase">Gityo Amiibo</h1>
          <h4 className="text-capitalize text_slanted">Site for Amiibo Hunters</h4>
          <a href="store" className="btn btn_yellow">
            view collection
          </a>
        </div>
      </div> 
    )
  }
}

export default Home;


