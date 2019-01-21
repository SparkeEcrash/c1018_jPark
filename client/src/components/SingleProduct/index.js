import React, { Component } from 'react';
import TopBorder from './TopBorder';
// import ProdNfo from './prodNfo';
// import ProdImg from './prodImg';

import { connect } from 'react-redux';
import { getProductDetail, clearProductDetail } from '../../actions/products_actions';

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
      <div>
        <TopBorder title='Amiibo Detail'></TopBorder>
        <div className="container">
          <div className="row">
            <div className="col-6">

            </div>
            <div className="col-6">
            
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.products
})

export default connect(mapStateToProps)(SingleProduct);

