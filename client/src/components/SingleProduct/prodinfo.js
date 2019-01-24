import React, { Component } from 'react'
import { connect } from 'react-redux';
import MyButton from "../utils/button";
import './prodinfo.css';
import Dialog from '@material-ui/core/Dialog';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import faTruck from "@fortawesome/fontawesome-free-solid/faTruck";
import faCheck from "@fortawesome/fontawesome-free-solid/faCheck";
import faTimes from "@fortawesome/fontawesome-free-solid/faTimes";

export class ProdInfo extends Component {

  state = {
    open: false
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  showProdTags = (detail) => (
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

  showProdActions = (detail) => (
        <MyButton
          type="add_to_cart_link"
          runAction={()=>{
            this.props.addToCart(detail._id);
            this.handleClickOpen();
          }}
        />
  )

  showProdCost = (detail) => (
    <div className="price">Price: $ {detail.price} </div>
  )

  showProdSeries = (detail) => (
    <div className="series">Series: {detail.series.name} </div>
  )

  showProdWave = (detail) => (
    <div className="wave">Wave: {detail.wave.name} </div>
  )

  render() {
    const detail = this.props.detail;
    const user = this.props.user.userData;
    return (
      <div className="card text-center prod_info">
        <div className="card-body">
          <h4 className="card-title"><strong>{detail.name}</strong></h4>
          <p className="card-text text-muted">{detail.description}</p>
        </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{ this.showProdTags(detail) }</li>
        <li className="list-group-item">{ this.showProdCost(detail) }</li>
        <li className="list-group-item">{ this.showProdSeries(detail) } </li>
        <li className="list-group-item">{ this.showProdWave(detail) } </li>
        {user.isAuth ? 
        <li className="list-group-item">        
          {this.showProdActions(detail)}
        </li>
        :null}
      </ul>
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
      >
        <div className="dialog_alert text-center">
          <h1>Amiibo Added</h1>
          <h3>Make sure you check out!</h3>
        </div>
      </Dialog>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return { user: state.user }
} 

export default connect(mapStateToProps)(ProdInfo);