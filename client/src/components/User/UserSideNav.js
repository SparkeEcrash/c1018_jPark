import React, {Fragment} from 'react';
import classnames from 'classnames';

const links = [
  {
    name: 'Profile',
    display: 'default'
  },
  {
    name: 'Profile Information',
    display: 'profile_information'
  },
  {
    name: 'Order History',
    display: 'order_history'
  }
]

const admin = [
  // {
  //   name: 'Site Info',
  //   display: 'site_info'
  // },
  {
    name: 'Add Products',
    display: 'add_products'
  },
  {
    name: 'Manage Categories',
    display: 'edit_categories'
  }
]

function UserSideNav({user, update, display}) {

  const generateLinks = (links) => (
    links.map((item, i) => {
      return (
      <div className={classnames(`list-group-item text-capitalize side_nav side_nav_${item.display}`, {[`side_nav_${item.display}_active`]: display === item.display})} onClick={()=>update(item.display)} key={i}>
        {item.name}
      </div>
      )
    })
  )

  return (

        <Fragment>
          <div className="card mt-3 mt-sm-0">
            <ul className="list-group list-group-flush">
              <div className="list-group-item text-uppercase nav_account">
                Account
              </div>
              {generateLinks(links)}
            </ul>
          </div>
          {user.userData ? user.userData.isAdmin ?           
            <div className=" card mb-3 mt-3 mb-sm-0">
              <ul className="list-group list-group-flush">
                <div className="list-group-item text-uppercase nav_admin">
                  Admin
                </div>
                {generateLinks(admin)}
              </ul>
            </div> : null : null
          }
          </Fragment>


  )
}

export default UserSideNav;
