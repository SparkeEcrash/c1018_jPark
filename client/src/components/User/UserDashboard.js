import React, { Component } from 'react'
import { connect } from 'react-redux';
import './User.css'

import UserLayout from './UserLayout';
import UserSideNav from './UserSideNav';
import UserProfile from './UserProfile';
import UserProfileInformation from './UserProfileInformation';
import UserOrderHistory from './UserOrderHistory';
import AdminAddProducts from './AdminAddProducts';
import AdminEditCategories from './AdminEditCategories';

export class UserDashboard extends Component {
  state = {
    display: 'default'
  }

  // updateDisplay = display => {
  //   this.setState({
  //     display: display
  //   }, ()=>console.log(this.state)
  //   )
  // }

  updateDisplay = display => {
    this.setState({
      display: display
    })
  }

  render() {
    return (
      <UserLayout>
      <div className="user-banner container-fluid d-flex flex-column justify-content-center">
        <div className="row">
          <div className="col-12 col-md-2 order-md-1 order-2  d-flex flex-column justify-content-center">
            <UserSideNav update={(display)=>this.updateDisplay(display)} user={this.props.user}></UserSideNav>
          </div>
          {this.state.display === 'default' ? 
          <div className="col-12 col-md-6 offset-md-2 order-md-2 order-1 d-flex flex-column justify-content-center">
            <UserProfile update={(display)=>this.updateDisplay(display)} user={this.props.user}></UserProfile>
          </div>
          : null
          }
          {this.state.display === 'profile_information' ? 
          <div className="col-12 col-md-6 offset-md-2 order-md-2 order-1 d-flex flex-column justify-content-center">
            <UserProfileInformation update={(display)=>this.updateDisplay(display)} user={this.props.user}></UserProfileInformation>  
          </div>
          : null
          }
          {this.state.display === 'order_history' ? 
          <div className="col-12 col-md-6 offset-md-2 order-md-2 order-1 d-flex flex-column justify-content-center">
            <UserOrderHistory products={this.props.user.userData.history}></UserOrderHistory>
          </div>
          : null
          }
          {this.state.display === 'add_products' ?
            <div className="col-12 col-md-10 order-md-2 order-1 d-flex flex-column justify-content-center">
              <AdminAddProducts className="d-none" user={this.props.user}></AdminAddProducts>
            </div>
          : null
          }
          {this.state.display === 'edit_categories' ? 
            <div className="col-12 col-md-10 order-md-2 order-1 d-flex flex-column justify-content-center">
              <AdminEditCategories></AdminEditCategories>
            </div>
          : null
          }
        </div>
      </div>
      </UserLayout>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      user: state.user
  }
}


export default connect(mapStateToProps)(UserDashboard)
