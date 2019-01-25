import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';

import {connect} from 'react-redux';
import {logoutUser} from '../../../actions/user_actions';
import classnames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.generateRandomColor(),
      collapsed: true,
      active: '',
      page: [
        {
          name: 'Home',
          linkTo: '/',
          public: true,
        },
        {
          name:'Account',
          linkTo: '/user/dashboard',
          public: false,
        },
        {
          name: 'Amiibos',
          linkTo: '/store',
          public: true,
        },
        {
          name: 'Checkout',
          linkTo: '/checkout',
          public: false,
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
  }

  toggleNavbar = () => {
    console.log('hello');
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  updateActive = link => {
    this.setState({
      active: link,
      collapsed: !this.state.collapsed
    })
  }

  logOutHandler = () => {
    this.props.dispatch(logoutUser()).then(response => {
      if(response.success){
        this.props.history.push('/');
      }
    })
  }
  
  generateRandomColor = () => {
    let num = Math.floor(Math.random() * 6);
    switch(num) {
      case 0:
        return 'red';
      case 1:
        return 'green';
      case 2: 
        return 'blue';
      case 3:
        return 'turqoise';
      case 4:
        return 'orange';
      case 5:
        return 'pink';
      default:
        break;
    }
  }

  defaultLinkPage = (item, i) => {
    const active = this.state.active;
    if(item.name === 'Checkout') {
      const user = this.props.user.userData;
      return (
        <li className="nav-item mx-2 cart_link" key={i}>
          <span id={`checkout-count`} className={`d-none d-sm-block align-text-top text-right ${this.state.color}`}>{user.cart ? user.cart.length > 0 ? user.cart.length : null : null}</span>
          <Link onClick={()=>this.updateActive(item.name)} to={item.linkTo} className={classnames(`nav-link nav-link-${item.name.toLowerCase()}`, {[`nav-active-${this.state.color}`]: item.name === active})}>
            Checkout
          </Link>
        </li>
      )  
    } else {      
      return (
        <li className="nav-item mx-2" key={i} onClick={()=>this.updateActive(item.name)}>
          <Link onClick={()=>this.updateActive(item.name)} to={item.linkTo} className={classnames(`nav-link nav-link-${item.name.toLowerCase()}`, {[`nav-active-${this.state.color}`]: item.name === active})}>
            {item.name}
          </Link>
        </li>
      )  
    }
  }

  defaultLinkUser = (item, i) => (
    <li className="nav-item mx-2" key={i} onClick={item.name === 'Log Out' ? this.logOutHandler : null}>
      <Link onClick={()=>this.updateActive(item.name)} to={item.linkTo} className="nav-link">      
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
    const collapsed = this.state.collapsed;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggle navbar-toggler collapsed' : 'navbar-toggler navbar-toggler-right';
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-light">
          <a href="/login" className="navbar-brand">
            <img src="/img/amiibo_logo.png" width="130" height="50.36" className="d-inline-block align-top"  alt="amiibo logo" />
          </a>
          <button
            className={`${classTwo}`}
            type="button"
            data-toggle="collapse"
            data-target="#myNavbar"
            aria-controls="navbarResponsive" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
            onClick={()=>{this.toggleNavbar()}}
          >
            <FontAwesomeIcon icon="bars" />
          </button>
          <div className={`${classOne}`} id="myNavbar">
            <ul className="navbar-nav mx-auto">
              {this.showLinks(this.state.page, 'page')}
            </ul>
            <ul className="navbar-nav">
              {this.showLinks(this.state.user, 'user')}
            </ul>
          </div>
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