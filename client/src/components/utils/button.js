import React from 'react'
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import faShoppingBag from '@fortawesome/fontawesome-free-solid/faShoppingBag';
import faTimes from "@fortawesome/fontawesome-free-solid/faTimes";


function button(props) {
  const buttons = () => {
    let template = '';

  switch(props.type) {
    case "default": 
    template = <Link
      className={!props.altClass ? "link_default" : props.altClass}
      to={props.linkTo}
      style={props.addStyles}
      >
      {props.title}
      </Link>
      break;
    case "bag_link":
    template = 
      <div className="bag_link" onClick={()=>props.runAction()}>
        <FontAwesomeIcon icon={faShoppingBag}/>
      </div>
      break;
    case "add_to_cart_link":
    template = 
      <div className="add_to_cart_link" onClick={()=> {
        props.runAction();
      }}> 
        <FontAwesomeIcon icon={faShoppingBag}/>
        Add to Cart
      </div>
      break;
    case "add_amiibo_link":
    template = 
    <div className="add_amiibo_link" onClick={(event)=> {
      props.runAction();
    }}>
      <FontAwesomeIcon icon={faShoppingBag}/>
        Add Amiibo
      </div>
      break;
    case "delete_amiibo_link":
    template =
    <div className="delete_amiibo_link" onClick={(event)=> {
      props.runAction();
    }}>
      <FontAwesomeIcon icon={faTimes}/>
      </div>
      break;
    default: 
    template='';
  }

  return template
}

  return (
    <div className="my_link">
      {buttons()}
    </div>
  )
}

export default button
