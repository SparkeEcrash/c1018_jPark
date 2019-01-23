import React from "react";
import MyButton from "../utils/button";
import './prodinfo.css';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import faTruck from "@fortawesome/fontawesome-free-solid/faTruck";
import faCheck from "@fortawesome/fontawesome-free-solid/faCheck";
import faTimes from "@fortawesome/fontawesome-free-solid/faTimes";

function ProdInfo(props) {

  const showProdTags = (detail) => (
    <div className="product_tags">
      <div className="row">
      { detail.shipping ? 
        <div className="tag col-6 mx-auto">
          <div><FontAwesomeIcon icon={faTruck}/></div>
          <div className="tag_text">
            <div>Free shipping</div>
            <div>And return</div>
          </div>
        </div>
        : null
      }
      { detail.available ? 
        <div className="tag col-6 mx-auto">
          <div><FontAwesomeIcon icon={faCheck}/></div>
          <div className="tag_text">
            <div>Available</div>
            <div>in store</div>
          </div>
        </div>
      : 
        <div className="tag col-6 mx-auto">
          <div><FontAwesomeIcon icon={faTimes}/></div>
          <div className="tag_text">
            <div>Not Available</div>
            <div>Preorder only</div>
          </div>
        </div>
      }
      </div>
    </div>
  )

  const showProdActions = (detail) => (
    <div className="product_actions">
      <div className="price">$ { detail.price }</div>
      {/* <div className="cart">
        <MyButton
          type="add_to_cart_link"
          runAction={()=>{
            props.addToCart(detail._id)
          }}
        />
      </div> */}
    </div>
  )

  const showProdCost = (detail) => (
    <div className="price">Price: $ {detail.price} </div>
  )

  const showProdSeries = (detail) => (
    <div className="series">Series: {detail.series.name} </div>
  )

  const showProdWave = (detail) => (
    <div className="wave">Wave: {detail.wave.name} </div>
  )

  const detail = props.detail;
  console.log(detail);
  return (
    <div className="card text-center prod_info">
      <div className="card-body">
        <h4 className="card-title"><strong>{detail.name}</strong></h4>
        <p className="card-text text-muted">{detail.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{ showProdTags(detail) }</li>
        <li className="list-group-item">{ showProdCost(detail) }</li>
        <li className="list-group-item">{ showProdSeries(detail) } </li>
        <li className="list-group-item">{ showProdWave(detail) } </li>
        <li className="list-group-item">        <MyButton
          type="add_to_cart_link"
        /> </li>
      </ul>
    </div>
    )
}

export default ProdInfo;
