import React from 'react'
import{ connect } from 'react-redux';

function UserLayout(props) {
  return (
    <div>
      {props.children}
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
      user: state.user
  }
}

export default connect(mapStateToProps)(UserLayout);
