import React, { Component } from 'react'
import { connect } from 'react-redux';
import './EditProductBackground.css'

import EditForm from './EditForm';

export class EditProduct extends Component {

  render() {
    return (
      <div className="edit_product_background container-fluid d-flex flex-column justify-content-center">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 order-md-2 order-1 d-flex flex-column justify-content-center">
            <EditForm></EditForm>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      user: state.user
  }
}


export default connect(mapStateToProps)(EditProduct)
