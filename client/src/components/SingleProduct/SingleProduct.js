import React, { Component } from 'react';
import ProdInfo from './prodinfo';
import ProdImg from './prodimg';
import {withAlert} from 'react-alert';
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import { connect } from 'react-redux';
import { addToCart } from '../../actions/user_actions';
import { deleteProduct } from '../../actions/products_actions';
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

  deleteAmiiboHandler(id) {
    const name = this.props.products.prodDetail.name;
    confirmAlert({
      title: 'Confirm to delete',
      message: `Are you sure you want to delete ${name}`,
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            this.props.dispatch(deleteProduct(id)).then(()=> {
              if(this.props.products.deleteProduct.success) {
                this.props.alert.show(`${name} deleted`)
              } else {
                this.props.alert.show(`There was an error and delete failed`)
              }      
            })
          }
        },
        {
          label: 'No',
          onClick: () => {
            this.props.alert.show(`${name} was not deleted`)
          }
        }
      ]
    })

    // this.props.dispatch(deleteProduct(id)).then(()=> {
    //   if(this.props.products.deleteProduct.success) {
    //     this.props.alert.show(`${this.props.products.prodDetail.name} deleted`)
    //   } else {
    //     this.props.alert.show(`${this.props.products.prodDetail.name} could not be deleted`)
    //   }      
    // })
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
                deleteAmiibo={(id)=>this.deleteAmiiboHandler(id)}
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

export default connect(mapStateToProps)(withAlert(SingleProduct));

