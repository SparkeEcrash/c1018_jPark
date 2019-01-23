import React, { Component } from 'react'
import TopBorder from './TopBorder';
import {price} from '../utils/Form/fixed_categories';

import {connect} from 'react-redux';
import { getProductsToShop, getSeries, getWaves } from '../../actions/products_actions';

import CollapseCheckbox from '../utils/collapseCheckBox';
import CollapseRadio from '../utils/collapseRadio';

import LoadmoreCards from './loadmoreCards';

export class Shop extends Component {

  state = {
    limit: 6,
    skip: 0,
    filters: {
      series: [],
      wave: [], 
      price: []
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.dispatch(getSeries());
    this.props.dispatch(getWaves());

    this.props.dispatch(getProductsToShop(
      this.state.skip,
      this.state.limit,
      this.state.filters
    ))
  }

  handlePrice = (value) => {
    const data = price;
    let array = [];
    for(let key in data) {
      if(data[key]._id === parseInt(value)) {
        array = data[key].array
      }
    }
    return array;
  }

  handleFilters = (filters, category) => {
    const newFilters = {...this.state.filters}
    newFilters[category] = filters;

    if(category === "price") {
      let priceValues = this.handlePrice(filters);
      newFilters[category] = priceValues
    }

    this.showFilteredResults(newFilters)
    this.setState({
      filters: newFilters
    })
  }

  showFilteredResults = (filters) => {
    this.props.dispatch(getProductsToShop(
      0,
      this.state.limit,
      filters
    )).then(()=>{
      this.setState({
        skip: 0
      })
    })
  }

  loadMoreCards = () => {
    let skip = this.state.skip + this.state.limit;
    this.props.dispatch(getProductsToShop(
      skip,
      this.state.limit,
      this.state.filters,
      this.props.products.toShop
    )).then(()=> {
      this.setState({
        skip
      })
    })
  }

  render() {
    const products = this.props.products;
    return (
      <div>
        <TopBorder title='Browse Amiibos'></TopBorder>
        <div className="container-fluid d-flex flex-column">
          <div className="row">
            <div className="col-12 col-md-3 col-xl-2 order-md-1 order-2">
              <CollapseCheckbox
                initState={false}
                title="Series"
                list={products.series}
                handleFiltersProp = {(filters)=>this.handleFilters(filters,'series')}
              ></CollapseCheckbox>
              <CollapseCheckbox
                initState={true}
                title="Waves"
                list={products.waves}
                handleFiltersProp={(filters)=>this.handleFilters(filters,'wave')}
              ></CollapseCheckbox>
              <CollapseRadio
                initState={true}
                title="Price"
                list={price}
                handleFiltersProp={(filters)=>this.handleFilters(filters,'price')}
              ></CollapseRadio>
            </div>
            <div className="col-12 col-md-9 col-xl-10 order-md-2 order-1 d-flex flex-column">
              <div>
                <LoadmoreCards
                  grid={this.state.grid}
                  limit={this.state.limit}
                  size={products.toShopSize}
                  products={products.toShop}
                  loadMore={()=>this.loadMoreCards()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return(
    {
      products: state.products  
    }
  )
}

export default connect(mapStateToProps)(Shop);
