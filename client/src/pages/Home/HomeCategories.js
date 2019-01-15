import React from "react";
import Kitchen from "../../images/categoryImg/kitchen-category.jpeg";
import Bathroom from "../../images/categoryImg/bathroom-category.jpeg";
import Livingroom from "../../images/categoryImg/livingroom-category.jpeg";
import Patio from "../../images/categoryImg/patio-category.jpeg";

const HomeCategories = () => {
  return (
    <section className="home-categories pb-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 col-lg-3 align-self-center">
            <h5 className="text-uppercase">product categories</h5>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              maiores.
            </p>
            <a
              href="products.html"
              className="text-weight-bold text-capitalize categories-link"
            >
              view all categories
            </a>
            <div className="categories-underline" />
          </div>
          <div className="col-10 mx-auto col-md-6 col-lg-9 my-3">
            <div className="row">
              <div className="col-md-6 col-lg-3 my-3">
                <div className="category-container">
                  <img
                    src={Kitchen}
                    className="img-fluid category-img"
                    alt="category img"
                  />
                  <a href="products.html" className="category-link">
                    <h6 className="text-uppercase mb-0">kitchen</h6>
                    <p className="mb-0 text-yellow">20 items</p>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 my-3">
                <div className="category-container">
                  <img
                    src={Bathroom}
                    className="img-fluid category-img"
                    alt="category img"
                  />
                  <a href="products.html" className="category-link">
                    <h6 className="text-uppercase mb-0">bathroom</h6>
                    <p className="mb-0 text-yellow">20 items</p>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 my-3">
                <div className="category-container">
                  <img
                    src={Livingroom}
                    className="img-fluid category-img"
                    alt="category img"
                  />
                  <a href="products.html" className="category-link">
                    <h6 className="text-uppercase mb-0">living room</h6>
                    <p className="mb-0 text-yellow">20 items</p>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 my-3">
                <div className="category-container">
                  <img
                    src={Patio}
                    className="img-fluid category-img"
                    alt="category img"
                  />
                  <a href="products.html" className="category-link">
                    <h6 className="text-uppercase mb-0">patio</h6>
                    <p className="mb-0 text-yellow">20 items</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCategories;
