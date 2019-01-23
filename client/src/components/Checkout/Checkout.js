import React, { Component } from 'react';
import CheckoutProductBlock from '../utils/User/checkout_product_block';
import './Checkout.css';

import { connect } from 'react-redux';
import { getCartItems, removeCartItem, onSuccessBuy } from '../../actions/user_actions';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import faFrown from '@fortawesome/fontawesome-free-solid/faFrown'
import faSmile from '@fortawesome/fontawesome-free-solid/faSmile'

import Paypal from '../utils/paypal'

export class Checkout extends Component {

  state = {
    loading: true,
    total: 0,
    showTotal: false,
    showSuccess: false
  }

  componentDidMount() {
    let cartItems = [];
    let user = this.props.user;

    if(user.userData.cart) {
      if(user.userData.cart.length > 0) {
        user.userData.cart.forEach(item=> {
          cartItems.push(item.id)
        });
        this.props.dispatch(getCartItems(cartItems, user.userData.cart))
        .then(() => {
          if(this.props.user.cartDetail.length > 0) {
            this.calculateTotal(this.props.user.cartDetail);
          }
        })
      }
    }
  }

  calculateTotal = (cartDetail) => {
    let total = 0;
    cartDetail.forEach(item=> {
      total += parseInt(item.price, 10) * item.quantity
    });

    this.setState({
      total,
      showTotal: true
    });
  }

  removeFromCart = (id) => {
    this.props.dispatch(removeCartItem(id))
    .then(()=> {
      if(this.props.user.cartDetail.length <= 0) {
        this.setState({
          showTotal: false
        })
      } else {
        this.calculateTotal(this.props.user.cartDetail)
      }
    })
  }

  transactionError = data => {
    console.log('Paypal error')
  }

  transactionCanceled = () => {
    console.log('Transaction cancelled')
  }

  transactionSuccess = data => {
    this.props.dispatch(onSuccessBuy({
      cartDetail: this.props.user.cartDetail,
      paymentData: data
    })).then(()=> {
      if(this.props.user.successBuy) {
        this.setState({
          showTotal: false,
          showSuccess: true
        })
      }
    })
  }

  showNoItemMessage = () => (
    <div className="checkout-empty-banner container d-flex justify-content-center align-items-center">
      <div className="col-8">
        <div className="card">
          <div className="row user_cart_empty d-flex justify-content-around align-items-center">
            <div className="cart_no_items">
              <FontAwesomeIcon icon={faFrown}/>
            </div>
            <div>
              <h1>You have no items</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  showSuccessMessage = () => (
    <div className="checkout-empty-banner container d-flex justify-content-center align-items-center">
      <div className="col-8">
        <div className="card">
          <div className="row user_cart_empty d-flex justify-content-around align-items-center">
            <div className="cart_no_items">
              <FontAwesomeIcon icon={faSmile}/>
            </div>
            <div>
              <h1>Your order has been sent</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  render() {
    return (
      <div className="checkout-banner container-fluid d-flex justify-content-center">
        { this.state.showTotal ? 
        <div className="col-8">
          <CheckoutProductBlock
            products={this.props.user}
            removeItem={(id)=>this.removeFromCart(id)}
          ></CheckoutProductBlock>
          <div className="card mt-3 mb-3">
            <div className="row user_cart_sum d-flex justify-content-around align-items-center">
              <div>
                <h2 className="">Total amount: $ {this.state.total}</h2>
              </div>
              <div className="paypal_button_container">
                <Paypal
                  toPay={this.state.total}
                  transactionError={(data)=>this.transactionError(data)}
                  transactionCanceled={(data)=>this.transactionCanceled(data)}
                  onSuccess={(data)=>this.transactionSuccess(data)}
                ></Paypal>
              </div>
            </div>
          </div>
        </div>
        : this.state.showSuccess ? 
          this.showSuccessMessage() 
          :
          this.showNoItemMessage() }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(Checkout);
