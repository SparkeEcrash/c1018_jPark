import React, { Component } from 'react';
import ProdInfo from './prodinfo';
import ProdImg from './prodimg';

import { connect } from 'react-redux';
import { addToCart } from '../../actions/user_actions';
import { getProductDetail, clearProductDetail } from '../../actions/products_actions';

import './SingleProduct.css';

export class SingleProduct extends Component {

  componentDidMount() {    
    const id = this.props.match.params.id;
    this.props.dispatch(getProductDetail(id)).then(response=> {
      if(!this.props.products.prodDetail){
        this.props.history.push('/store')
      }
    });
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this.props.dispatch(clearProductDetail());
  }

  addToCartHandler(id) {
    this.props.dispatch(addToCart(id))
  }

  render() {
    return (
      <div className="single_product_background d-flex flex-column justify-content-center">
        {/* <TopBorder title='Amiibo Detail'></TopBorder> */}
        <div className="product_detail_wrapper container">
        {
          this.props.products.prodDetail ?
          <div className="row">
            <div className="mt-3 mt-sm-0 col-12 col-sm-6 d-flex flex-column justify-content-center">
              <ProdImg detail={this.props.products.prodDetail}></ProdImg>

            </div>
            <div className="mb-3 mb-sm-0 mt-3 mt-sm-0 col-12 col-sm-6 d-flex flex-column justify-content-center">
              <ProdInfo
                detail={this.props.products.prodDetail}
                addToCart={(id)=>this.addToCartHandler(id)}
              />
            </div>
          </div>
          :null 
        }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.products
})

export default connect(mapStateToProps)(SingleProduct);

