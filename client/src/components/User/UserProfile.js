import React, {Fragment} from 'react'

function UserProfile({user}) {
  return (
  <Fragment>
    {user.userData ?  
    <div className="no-padding"> 
      <h3 className="list-group-item">Account Information</h3>
      <p className="list-group-item">Name: {user.userData.name} {user.userData.lastname}</p>
      <p className="list-group-item">Email: {user.userData.email}</p>
      <p className="list-group-item">Role: {user.userData.isAdmin ? 'Admin' : 'User'}</p>      
    </div>
    :null}
  </Fragment>
  )
}

export default UserProfile
