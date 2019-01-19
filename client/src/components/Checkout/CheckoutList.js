import React from 'react'
const Checkout1 = '/images/img-products/product-2.png';
const Checkout2 = '/images/img-products/product-7.png';
const Checkout3 = '/images/img-products/product-1.png';


function CheckoutList() {
  return (
    <section className="totals py-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col text-center text-uppercase">
            {/* header */}
            <div className="row">
              <div className="col-10 mx-auto col-md-2">
                <p className="text-uppercase">products</p>
              </div>
              <div className="col-10 mx-auto col-md-4">
                <p className="text-uppercase">name of products</p>
              </div>
              <div className="col-10 mx-auto col-md-2">
                <p className="text-uppercase">price</p>
              </div>
              <div className="col-10 mx-auto col-md-2">
                <p className="text-uppercase">quantity</p>
              </div>
              <div className="col-10 mx-auto col-md-2">
                <p className="text-uppercase">total</p>
              </div>
            </div>
            <hr />
            {/* Checkout1 */}
            <div className="row my-3 align-items-center">
              <div className="col-10 mx-auto col-md-2">
                <img src={Checkout1} className="img-fluid" alt=""></img>
              </div>
              <div className="col-10 mx-auto col-md-4">
                <p>comfortable chair</p>
              </div>
              <div className="col-10 mx-auto col-md-2">
                <p>$100.00</p>
              </div>
              <div className="col-10 mx-auto col-md-2">
                <div className="d-flex justify-content-center align-items-center">
                  <span className="btn btn-black mx-1">-</span>
                  <span className="btn btn-black mx-1">4</span>
                  <span className="btn btn-black mx-1">+</span>
                </div>
              </div>
              <div className="col-10 mx-auto col-md-2">
                <p>$400.00</p>
              </div>
            </div>
            {/* Checkout2 */}
            <div className="row my-3 align-items-center">
              <div className="col-10 mx-auto col-md-2">
                <img src={Checkout2} className="img-fluid" alt=""></img>
              </div>
              <div className="col-10 mx-auto col-md-4">
                <p>comfortable chair</p>
              </div>
              <div className="col-10 mx-auto col-md-2">
                <p>$100.00</p>
              </div>
              <div className="col-10 mx-auto col-md-2">
                <div className="d-flex justify-content-center align-items-center">
                  <span className="btn btn-black mx-1">-</span>
                  <span className="btn btn-black mx-1">4</span>
                  <span className="btn btn-black mx-1">+</span>
                </div>
              </div>
              <div className="col-10 mx-auto col-md-2">
                <p>$400.00</p>
              </div>
            </div>
            {/* Checkout3 */}
            <div className="row my-3 align-items-center">
              <div className="col-10 mx-auto col-md-2">
                <img src={Checkout3} className="img-fluid" alt=""></img>
              </div>
              <div className="col-10 mx-auto col-md-4">
                <p>comfortable chair</p>
              </div>
              <div className="col-10 mx-auto col-md-2">
                <p>$100.00</p>
              </div>
              <div className="col-10 mx-auto col-md-2">
                <div className="d-flex justify-content-center align-items-center">
                  <span className="btn btn-black mx-1">-</span>
                  <span className="btn btn-black mx-1">4</span>
                  <span className="btn btn-black mx-1">+</span>
                </div>
              </div>
              <div className="col-10 mx-auto col-md-2">
                <p>$400.00</p>
              </div>
            </div>
            {/* Checkout */}
            <div className="row">
              <div className="col col-sm-6 mx-auto d-flex justify-content-center flex-wrap">
                <button type="button" className="btn btn-black my-2">continue shopping</button>
                <button type="button" className="btn btn-yellow my-2 ml-2">checkout</button>
              </div>
            </div>
            {/* Checkout Total */}
            <div className="row">
              <div className="col mx-auto my-3 col-sm-8 col-md-6 col-lg-4">
                <div className="card card-body bg-secondary text-uppercase">
                  <div className="card-title text-white">
                    <h6>cart total</h6>
                  </div>
                  <div className="row">
                    <div className="col-6">sub total</div>
                    <div className="col-6">$900.00</div>
                    <div className="col-6">tax</div>
                    <div className="col-6">$123.00</div>
                    <div className="col-6">shipping</div>
                    <div className="col-6">$66.00</div>
                    <div className="col-6 my-3">order total</div>
                    <div className="col-6 my-3 text-danger">$10,000.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CheckoutList
