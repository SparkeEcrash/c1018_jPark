import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ProductCatalog extends Component {
  render() {
    return (
      <section className="products">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 col-md-5 col-lg-3 mx-auto my-3 px-5 text-capitalize">
            <div className="products-categories-title my-4">
              <h6 className="text-uppercase">shop by categories</h6>
              <div className="products-categories-underline"></div>
            </div>
            <a href="#" className="d-block products-categories-link">
              <p className="mb-0">kitchen</p>
            </a>
            <a href="#" className="d-block products-categories-link">
              <p className="mb-0">bathroom</p>
            </a>
            <a href="#" className="d-block products-categories-link">
              <p className="mb-0">living room</p>
            </a>
            <a href="#" className="d-block products-categories-link">
              <p className="mb-0">bedroom</p>
            </a>
          
            <a href="#" className="d-block products-categories-link">
              <p className="mb-0">patio</p>
            </a>
            <div className="products-categories-title my-4">
              <h6 className="text-uppercase">shop by price</h6>
              <div className="products-categories-underline"></div>
            </div>
            <form>
              <div className="form-group">
                <label htmlFor="price-range">range : $0 - $1000</label>
                <input type="range" name="price-range" className="form-control-range" id="price-range"></input>
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text form-icon">
                    <FontAwesomeIcon icon="search" />
                  </span>
                </div>
                <input type="text" className="form-control text-capitalize" placeholder="search by name"></input>
              </div>
            </form>
            <div className="products-categories-title my-4">
              <h6 className="text-uppercase">shop by color</h6>
              <div className="products-categories-underline"></div>
            </div>
          <a href="#">
            <p className="text-capitalize mb-0">
              <span className="d-inline-block products-color products-color-black mr-2"></span>
              black (5)
            </p>
          </a>
          <a href="#">
            <p className="text-capitalize mb-0">
              <span className="d-inline-block products-color products-color-red mr-2"></span>
              red (5)
            </p>
          </a>
          <a href="#">
            <p className="text-capitalize mb-0">
              <span className="d-inline-block products-color products-color-blue mr-2"></span>
              blue (5)
            </p>
          </a>
          <a href="#">
            <p className="text-capitalize mb-0">
              <span className="d-inline-block products-color products-color-yellow mr-2"></span>
              yellow (5)
            </p>
          </a>
          <a href="#">
            <p className="text-capitalize mb-0">
              <span className="d-inline-block products-color products-color-green mr-2"></span>
              green (5)
            </p>
          </a>
          </div>

          <div className="col-10 col-md-7 col-lg-9 mx-auto my-3">
            <div className="row">
					    <div className="mx-auto col-md-6 col-lg-4">
                <div className="featured-container p-5">
                  <img src="/images/img-products/product-7.png" className="img-fluid" alt="product"/>
                  <span className="featured-search-icon" data-toggle="modal" data-target="#productModal">
                    <FontAwesomeIcon icon="search" />
                  </span>
                  <a href="#" className="featured-store-link text-capitalize">add to cart</a>
                </div>
                <h6 className="text-capitalize text-center my-2">
                  special product
                </h6>
                <h6 className="text-center">
                  <span className="text-muted old-price mx-2">$200</span>
                  <span>$100</span>
                </h6>
              </div>
					    <div className="mx-auto col-md-6 col-lg-4">
                <div className="featured-container p-5">
                  <img src="/images/img-products/product-8.png" className="img-fluid" alt="product"/>
                  <span className="featured-search-icon" data-toggle="modal" data-target="#productModal">
                    <FontAwesomeIcon icon="search" />
                  </span>
                  <a href="#" className="featured-store-link text-capitalize">add to cart</a>
                </div>
                <h6 className="text-capitalize text-center my-2">
                  special product
                </h6>
                <h6 className="text-center">
                  <span className="text-muted old-price mx-2">$200</span>
                  <span>$100</span>
                </h6>
              </div>
					    <div className="mx-auto col-md-6 col-lg-4">
                <div className="featured-container p-5">
                  <img src="/images/img-products/product-9.png" className="img-fluid" alt="product"/>
                  <span className="featured-search-icon" data-toggle="modal" data-target="#productModal">
                    <FontAwesomeIcon icon="search" />
                  </span>
                  <a href="#" className="featured-store-link text-capitalize">add to cart</a>
                </div>
                <h6 className="text-capitalize text-center my-2">
                  special product
                </h6>
                <h6 className="text-center">
                  <span className="text-muted old-price mx-2">$200</span>
                  <span>$100</span>
                </h6>
              </div>
					    <div className="mx-auto col-md-6 col-lg-4">
                <div className="featured-container p-5">
                  <img src="/images/img-products/product-10.png" className="img-fluid" alt="product"/>
                  <span className="featured-search-icon" data-toggle="modal" data-target="#productModal">
                    <FontAwesomeIcon icon="search" />
                  </span>
                  <a href="#" className="featured-store-link text-capitalize">add to cart</a>
                </div>
                <h6 className="text-capitalize text-center my-2">
                  special product
                </h6>
                <h6 className="text-center">
                  <span className="text-muted old-price mx-2">$200</span>
                  <span>$100</span>
                </h6>
              </div>
              <div className="mx-auto col-md-6 col-lg-4">
                <div className="featured-container p-5">
                  <img src="/images/img-products/product-11.png" className="img-fluid" alt="product"/>
                  <span className="featured-search-icon" data-toggle="modal" data-target="#productModal">
                    <FontAwesomeIcon icon="search" />
                  </span>
                  <a href="#" className="featured-store-link text-capitalize">add to cart</a>
                </div>
                <h6 className="text-capitalize text-center my-2">
                  special product
                </h6>
                <h6 className="text-center">
                  <span className="text-muted old-price mx-2">$200</span>
                  <span>$100</span>
                </h6>
              </div>
              <div className="mx-auto col-md-6 col-lg-4">
                <div className="featured-container p-5">
                  <img src="/images/img-products/product-12.png" className="img-fluid" alt="product"/>
                  <span className="featured-search-icon" data-toggle="modal" data-target="#productModal">
                    <FontAwesomeIcon icon="search" />
                  </span>
                  <a href="#" className="featured-store-link text-capitalize">add to cart</a>
                </div>
                <h6 className="text-capitalize text-center my-2">
                  special product
                </h6>
                <h6 className="text-center">
                  <span className="text-muted old-price mx-2">$200</span>
                  <span>$100</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
  }
}

export default ProductCatalog;
