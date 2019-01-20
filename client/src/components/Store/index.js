import React, { Component } from 'react'
import TopBorder from './TopBorder';
import {price} from '../utils/Form/fixed_categories';

import StoreCatalog from './StoreCatalog';

import {connect} from 'react-redux';
import { getProductsToShop, getSeries, getWaves } from '../../actions/products_actions';

import CollapseCheckbox from '../utils/collapseCheckBox';
import CollapseRadio from '../utils/collapseRadio';

import LoadmoreCards from './loadmoreCards';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import faBars from '@fortawesome/fontawesome-free-solid/faBars';
import faTh from '@fortawesome/fontawesome-free-solid/faTh';

// import StoreBanner from './StoreBanner';
// import StoreCatalog from './StoreCatalog';
// import FeaturedProducts from '../Shared/FeaturedProducts';
// import NewsLetter from '../Shared/NewsLetter';
// import Skills from '../Shared/Skills';

export class Shop extends Component {

  state = {
    grid: '',
    limit: 6,
    skip: 0,
    filters: {
      series: [],
      wave: [], 
      price: []
    }
  }

  componentDidMount() {
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

  handleGrid = () => {
    this.setState({
      grid: !this.state.grid ? 'grid_bars':''
    })
  }

  render() {
    const products = this.props.products;
    return (
      <div>
        <TopBorder title='Browse Amiibos'></TopBorder>
        <div className="container-fluid d-flex flex-column">
          <div className="row">
            <div className="col-12 col-md-3 order-md-1 order-2">
              <CollapseCheckbox
                initState={true}
                title="Series"
                list={products.series}
                handleFiltersProp = {(filters)=>this.handleFilters(filters,'series')}
              ></CollapseCheckbox>
              <CollapseCheckbox
                initState={false}
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
            <div className="col-12 col-md-9 order-md-2 order-1 d-flex flex-column">
              <div className="shop_options">
                <div className="shop_grids">
                  <div className={`grid_btn ${this.state.grid ? '': 'active'}`} onClick={()=>this.handleGrid()}>
                    <FontAwesomeIcon icon={faTh}/>
                  </div>
                  <div className={`grid_btn ${!this.state.grid?'':'active'}`} onClick={()=>this.handleGrid()}>
                    <FontAwesomeIcon icon={faBars}/>
                  </div>
                </div>
              </div>
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
        // <StoreCatalog></StoreCatalog>
        // {/* <FeaturedProducts></FeaturedProducts> */}
        // {/* <NewsLetter></NewsLetter> */}
        // {/* <Skills></Skills> */}
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
