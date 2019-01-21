import React from 'react';
import './TopBorder.css';

function TopBorder(props) {
  return (
    <div className="product_page_top mx-auto">
      <div className="browse_title text-center text-sm-left ml-sm-3">{props.title}</div>
    </div>
  )
}

export default TopBorder
