import React, { Component } from 'react'
import './header.css';
import { Link, withRouter } from 'react-router-dom';

import {connect} from 'react-redux';
import {logoutUser} from '../../../actions/user_actions';

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
        name:'Account',
        linkTo: '/user/dashboard',
        public: false
      },
      {
        name: 'Amiibos',
        linkTo: '/store',
        public: true
      },
      {
        name: 'Checkout',
        linkTo: '/checkout',
        public: false
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
        linkTo: '/',
        public: false
      }
    ]
  }

  logOutHandler = () => {
    this.props.dispatch(logoutUser()).then(response => {
      if(response.success){
        this.props.history.push('/');
      }
    })
  }

  defaultLinkPage = (item, i) => {
    if(item.name === 'Checkout') {
      const user = this.props.user.userData;
      return (
        <li className="nav-item mx-2 cart_link" key={i}>
          <span className="align-text-top text-right">{user.cart ? user.cart.length: 0}</span>
          <Link to={item.linkTo} className="nav-link">
            Checkout
          </Link>
        </li>
      )  
    } else {      
      return (
        <li className="nav-item mx-2" key={i}>
          <Link to={item.linkTo} className="nav-link">
            {item.name}
          </Link>
        </li>
      )  
    }
  }

  defaultLinkUser = (item, i) => (
    <li className="nav-item mx-2" key={i} onClick={item.name === 'Log Out' ? this.logOutHandler : null}>
      <Link to={item.linkTo} className="nav-link">      
        {item.name}
      </Link>
    </li>
  )

  showLinks = (type, position) => {
    let list = [];
    if(this.props.user.userData){
      type.forEach((item)=> {
        if(!this.props.user.userData.isAuth){
          if(item.public){
            list.push(item)
          } 
        } else {
          // if((item.name !== 'Log In') && (item.name !== 'Home')){
          if(item.name !== 'Log In'){
            list.push(item)
          }
        }
      });
    }

    return list.map((item, i) => (
      position === 'page' 
      ?
      this.defaultLinkPage(item, i)
      :
      this.defaultLinkUser(item, i)
      )
    ) 
  }

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

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(withRouter(Header));