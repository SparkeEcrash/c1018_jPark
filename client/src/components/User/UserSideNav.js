import React, {Fragment} from 'react';

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
    name: 'Edit Categories',
    display: 'edit_categories'
  }
]

function UserSideNav({user, update}) {

  const generateLinks = (links) => (
    links.map((item, i) => (
      <div className="list-group-item text-capitalize" onClick={()=>update(item.display)} key={i}>
        {item.name}
      </div>
    ))
  )

  return (

        <Fragment>
          <div className="account mt-0">
            <ul className="list-group list-group-flush">
              <div className="list-group-item text-uppercase nav-color mt-3">
                Account
              </div>
              {generateLinks(links)}
            </ul>
          </div>
          {user.userData ? user.userData.isAdmin ?           
            <div className=" admin mt-0">
              <ul className="list-group list-group-flush">
                <div className="list-group-item text-uppercase nav-color mt-3">
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
