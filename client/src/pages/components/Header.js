import React, { Component } from 'react'
import Logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends Component {
  render() {
    return (
      <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <a href="index.html" className="navbar-brand">
          <img src={Logo} alt="company logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#myNavbar"
        >
          <FontAwesomeIcon icon="bars" />
        </button>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item mx-2 nav-active">
              <a href="index.html" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item mx-2">
              <a href="products.html" className="nav-link">
                Products
              </a>
            </li>
            <li className="nav-item mx-2">
              <a href="singleproduct.html" className="nav-link">
                Single Product
              </a>
            </li>
            <li className="nav-item mx-2">
              <a href="store.html" className="nav-link">
                Store
              </a>
            </li>
          </ul>
        </div>

        <div className="navbar-icons d-none d-lg-flex">
          <div className="navbar-icon mx-2">
            <FontAwesomeIcon icon="search" />
          </div>

          <a href="store.html" className="navbar-icon mx-2 navbar-cart-icon">
            <FontAwesomeIcon icon="shopping-cart" />
            <div className="cart-items">7</div>
          </a>
        </div>
      </nav>

      {/* <div className="banner d-flex align-items-center pl-3 pl-lg-5">
        <div>
          <h1 className="text-capitalize text-slanted mb-0">minimalist</h1>
          <h1 className="text-lowercase font-weight-bold">interior style</h1>
          <a href="products.html" className="btn btn-yellow">
            view collection
          </a>
        </div>
      </div> */}
    </header>
    )
  }
}

export default Header;