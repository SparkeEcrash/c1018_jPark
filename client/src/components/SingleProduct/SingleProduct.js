import React, { Component } from 'react';
import ProdInfo from './prodinfo';
import ProdImg from './prodimg';

import { connect } from 'react-redux';
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
  }

  componentWillUnmount() {
    this.props.dispatch(clearProductDetail());
  }

  render() {
    console.log(this.props);
    return (
      <div className="single-product-background d-flex flex-column justify-content-center">
        {/* <TopBorder title='Amiibo Detail'></TopBorder> */}
        <div className="product_detail_wrapper container">
        {
          this.props.products.prodDetail ?
          <div className="row">
            <div className="col-6">
              <ProdImg detail={this.props.products.prodDetail}></ProdImg>

            </div>
            <div className="col-6">
              <ProdInfo
                  detail={this.props.products.prodDetail}
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

