import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Image1 = '/images/img-products/product-1.png';


function SingleProductView() {
  return (
    <section className="single-product py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-lg-4 text-center my-5">
            <div className="single-product-img-container">
              <img src={Image1} className="img-fluid" alt="" />
            </div>
            <div className="row single-product-photos mt-3">
              {/* photo 1 */}
              <div className="col-2 col-sm-2 single-product-photo p-1">
                <img src={Image1} className="img-fluid" alt="" />
              </div>
              {/* photo 2 */}
              <div className="col-2 col-sm-2 single-product-photo p-1">
                <img src={Image1} className="img-fluid" alt="" />
              </div>
              {/* photo 3 */}
              <div className="col-2 col-sm-2 single-product-photo p-1">
                <img src={Image1} className="img-fluid" alt="" />
              </div>
              {/* photo 4 */}
              <div className="col-2 col-sm-2 single-product-photo p-1">
                <img src={Image1} className="img-fluid" alt="" />
              </div>
              {/* photo 5 */}
              <div className="col-2 col-sm-2 single-product-photo p-1">
                <img src={Image1} className="img-fluid" alt="" />
              </div>
              {/* photo 6 */}
              <div className="col-2 col-sm-2 single-product-photo p-1">
                <img src={Image1} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
          {/* info */}
          <div className="col-10 mx-auto col-lg-8 single-product-info my-5 px-lg-5">
            {/* ratings */}
            <div className="ratings">
              <span className="rating-icon"><FontAwesomeIcon icon="star"></FontAwesomeIcon></span>
              <span className="rating-icon"><FontAwesomeIcon icon="star"></FontAwesomeIcon></span>
              <span className="rating-icon"><FontAwesomeIcon icon="star"></FontAwesomeIcon></span>
              <span className="rating-icon"><FontAwesomeIcon icon="star"></FontAwesomeIcon></span>
              <span className="rating-icon"><FontAwesomeIcon icon={['far', 'star']} /></span>
              <span className="text-capitalize"> (25 customer reviews)</span>
            </div>
            {/* ratings */}
            <h2 className="text-uppercase my-2">
              premium office armchair
            </h2>
            <h2>$10.00 - $200.00</h2>
            <p className="lead text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, magnam?</p>
            {/* colors */}
            <h5 className="text-uppercase">
              colors : 
              <span className="d-inline-block products-color products-color-black mr-2"></span>
              <span className="d-inline-block products-color products-color-red mr-2"></span>
              <span className="d-inline-block products-color products-color-blue mr-2"></span>
            </h5>
            {/* end of colors */}
            {/* sizes */}
            <h5 className="text-uppercase">
              sizes : 
              <span className="mx-2">xs</span>
              <span className="mx-2">s</span>
              <span className="mx-2">m</span>
              <span className="mx-2">l</span>
              <span className="mx-2">xl</span>
            </h5>
            <div className="d-flex flex-wrap">
              {/* cart buttons */}
              <div className="d-flex my-2">
                <span className="btn btn-black mx-1">-</span>
                <span className="btn btn-black mx-1">4</span>
                <span className="btn btn-black mx-1">+</span>
              </div>
              <button className="btn btn-black my-2 mx-2">
                wishlist
              </button>
              <button className="btn btn-yellow my-2 mx-2">add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleProductView
