import React from 'react';
import './BrowseBorder.css';

function BrowseBorder(props) {
  return (
    <div className="store_page_top mx-auto">
      <div className="text-center text-sm-left ml-sm-3">{props.title}</div>
    </div>
  )
}

export default BrowseBorder;
