import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Product7 from '../../images/img-products/product-7.png';
import Product8 from '../../images/img-products/product-8.png';
import Product9 from '../../images/img-products/product-9.png';
import Product10 from '../../images/img-products/product-10.png';
import Product11 from '../../images/img-products/product-11.png';
import Product12 from '../../images/img-products/product-12.png';


class ProductCatalog extends Component {
  render() {
    return (
      <section class="products">
      <div class="container-fluid">
        <div class="row">
          <div class="col-10 col-md-5 col-lg-3 mx-auto my-3 px-5 text-capitalize">
            <div class="products-categories-title my-4">
              <h6 class="text-uppercase">shop by categories</h6>
              <div class="products-categories-underline"></div>
            </div>
            <a href="#" class="d-block products-categories-link">
              <p class="mb-0">kitchen</p>
            </a>
            <a href="#" class="d-block products-categories-link">
              <p class="mb-0">bathroom</p>
            </a>
            <a href="#" class="d-block products-categories-link">
              <p class="mb-0">living room</p>
            </a>
            <a href="#" class="d-block products-categories-link">
              <p class="mb-0">bedroom</p>
            </a>
          
            <a href="#" class="d-block products-categories-link">
              <p class="mb-0">patio</p>
            </a>
            <div class="products-categories-title my-4">
              <h6 class="text-uppercase">shop by price</h6>
              <div class="products-categories-underline"></div>
            </div>
            <form>
              <div class="form-group">
                <label for="price-range">range : $0 - $1000</label>
                <input type="range" name="price-range" class="form-control-range" id="price-range"></input>
              </div>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text form-icon">
                    <FontAwesomeIcon icon="search" />
                  </span>
                </div>
                <input type="text" class="form-control text-capitalize" placeholder="search by name"></input>
              </div>
            </form>
            <div class="products-categories-title my-4">
              <h6 class="text-uppercase">shop by color</h6>
              <div class="products-categories-underline"></div>
            </div>
          <a href="#">
            <p class="text-capitalize mb-0">
              <span class="d-inline-block products-color products-color-black mr-2"></span>
              black (5)
            </p>
          </a>
          <a href="#">
            <p class="text-capitalize mb-0">
              <span class="d-inline-block products-color products-color-red mr-2"></span>
              red (5)
            </p>
          </a>
          <a href="#">
            <p class="text-capitalize mb-0">
              <span class="d-inline-block products-color products-color-blue mr-2"></span>
              blue (5)
            </p>
          </a>
          <a href="#">
            <p class="text-capitalize mb-0">
              <span class="d-inline-block products-color products-color-yellow mr-2"></span>
              yellow (5)
            </p>
          </a>
          <a href="#">
            <p class="text-capitalize mb-0">
              <span class="d-inline-block products-color products-color-green mr-2"></span>
              green (5)
            </p>
          </a>
          </div>

          <div class="col-10 col-md-7 col-lg-9 mx-auto my-3">
            <div class="row">
					    <div class="mx-auto col-md-6 col-lg-4">
                <div class="featured-container p-5">
                  <img src={Product7} class="img-fluid" alt="product"/>
                  <span class="featured-search-icon" data-toggle="modal" data-target="#productModal">
                    <FontAwesomeIcon icon="search" />
                  </span>
                  <a href="#" class="featured-store-link text-capitalize">add to cart</a>
                </div>
                <h6 class="text-capitalize text-center my-2">
                  special product
                </h6>
                <h6 class="text-center">
                  <span class="text-muted old-price mx-2">$200</span>
                  <span>$100</span>
                </h6>
              </div>
					    <div class="mx-auto col-md-6 col-lg-4">
                <div class="featured-container p-5">
                  <img src={Product8} class="img-fluid" alt="product"/>
                  <span class="featured-search-icon" data-toggle="modal" data-target="#productModal">
                    <FontAwesomeIcon icon="search" />
                  </span>
                  <a href="#" class="featured-store-link text-capitalize">add to cart</a>
                </div>
                <h6 class="text-capitalize text-center my-2">
                  special product
                </h6>
                <h6 class="text-center">
                  <span class="text-muted old-price mx-2">$200</span>
                  <span>$100</span>
                </h6>
              </div>
					    <div class="mx-auto col-md-6 col-lg-4">
                <div class="featured-container p-5">
                  <img src={Product9} class="img-fluid" alt="product"/>
                  <span class="featured-search-icon" data-toggle="modal" data-target="#productModal">
                    <FontAwesomeIcon icon="search" />
                  </span>
                  <a href="#" class="featured-store-link text-capitalize">add to cart</a>
                </div>
                <h6 class="text-capitalize text-center my-2">
                  special product
                </h6>
                <h6 class="text-center">
                  <span class="text-muted old-price mx-2">$200</span>
                  <span>$100</span>
                </h6>
              </div>
					    <div class="mx-auto col-md-6 col-lg-4">
                <div class="featured-container p-5">
                  <img src={Product10} class="img-fluid" alt="product"/>
                  <span class="featured-search-icon" data-toggle="modal" data-target="#productModal">
                    <FontAwesomeIcon icon="search" />
                  </span>
                  <a href="#" class="featured-store-link text-capitalize">add to cart</a>
                </div>
                <h6 class="text-capitalize text-center my-2">
                  special product
                </h6>
                <h6 class="text-center">
                  <span class="text-muted old-price mx-2">$200</span>
                  <span>$100</span>
                </h6>
              </div>
              <div class="mx-auto col-md-6 col-lg-4">
                <div class="featured-container p-5">
                  <img src={Product11} class="img-fluid" alt="product"/>
                  <span class="featured-search-icon" data-toggle="modal" data-target="#productModal">
                    <FontAwesomeIcon icon="search" />
                  </span>
                  <a href="#" class="featured-store-link text-capitalize">add to cart</a>
                </div>
                <h6 class="text-capitalize text-center my-2">
                  special product
                </h6>
                <h6 class="text-center">
                  <span class="text-muted old-price mx-2">$200</span>
                  <span>$100</span>
                </h6>
              </div>
              <div class="mx-auto col-md-6 col-lg-4">
                <div class="featured-container p-5">
                  <img src={Product12} class="img-fluid" alt="product"/>
                  <span class="featured-search-icon" data-toggle="modal" data-target="#productModal">
                    <FontAwesomeIcon icon="search" />
                  </span>
                  <a href="#" class="featured-store-link text-capitalize">add to cart</a>
                </div>
                <h6 class="text-capitalize text-center my-2">
                  special product
                </h6>
                <h6 class="text-center">
                  <span class="text-muted old-price mx-2">$200</span>
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
