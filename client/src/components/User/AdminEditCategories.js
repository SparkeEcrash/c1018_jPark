import React, { Component } from 'react'
import { connect } from 'react-redux';

import { update, generateData, isFormValid, resetFields } from '../../components/utils/Form/formActions';
import FormField from '../../components/utils/Form/formfield';

import AdminAddWave from './AdminAddWave';
import AdminAddSeries from './AdminAddSeries';

export class AdminEditCategories extends Component {
  render() {
    return (
      <div className="row d-flex justify-content-center">
        <AdminAddWave/>
        <AdminAddSeries/>
      </div>
    )
  }
}

export default connect()(AdminEditCategories)
