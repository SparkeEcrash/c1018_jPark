import React, { Component } from 'react'
import './header.css';
import { Link, withRouter } from 'react-router-dom';

import {connect} from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends Component {
  state = {
    page: [
      {
        name: 'Home',
        linkTo: '/',
        public: true
      },
      {
        name: 'Amiibos',
        linkTo: '/store',
        public: true
      },
      {
        name: 'Checkout',
        linkTo: '/checkout',
        public: true
      }
    ],
    user: [
      {
        name: 'Log In',
        linkTo: '/login',
        public: true
      },
      {
        name: 'Log Out',
        public: false
      }
    ]
  }

  logOutHandler = () => {
    console.log('logged out');
  }

  defaultLinkPage = (item, i) => (
    <li className="nav-item mx-2" key={i}>
      <Link to={item.linkTo} className="nav-link">
        {item.name}
      </Link>
    </li>
  )

  defaultLinkUser = (item, i) => (
    item.name === 'Log out'
    ?
    <li className="nav-item mx-2">
      {item.name}
    </li>
    :
    <li className="nav-item mx-2" key={'asdf'}>
      <Link to={item.linkTo} className="nav-link">
        {item.name}
      </Link>
    </li>
  )

  showLinks = (type, position) => {
    let list = [];
    type.forEach((item)=> {
      if(item.public){
        list.push(item)
      }
    })

    return list.map((item, i) => (
      position === 'page' 
      ?
      this.defaultLinkPage(item, i)
      :
      this.defaultLinkUser(item, i)
      )
    ) 
  }

//   <div className="navbar-icon mx-2">
//   <FontAwesomeIcon icon="search" />
// </div>

  render() {
    return (
      <header>
      <nav className="navbar navbar-expand-md navbar-light">
        <a href="/login" className="navbar-brand">
          <img src="/img/amiibo_logo.png" width="130" height="50.36" className="d-inline-block align-top"  alt="amiibo logo" />
        </a>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="navbar-nav mx-auto">
            {this.showLinks(this.state.page, 'page')}
          </ul>
          <ul className="navbar-nav">
            {this.showLinks(this.state.user, 'user')}
          </ul>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#myNavbar"
        >
          <FontAwesomeIcon icon="bars" />
        </button>
      </nav>
    </header>
    )
  }
}

export default connect()(withRouter(Header));