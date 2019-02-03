import React, { Component } from 'react'

import FormField from '../../components/utils/Form/formfield';
import { update, generateData, isFormValid, resetFields } from'../../components/utils/Form/formActions';

import { connect } from 'react-redux';
import {withAlert} from 'react-alert';
import { getWaves, addWave } from '../../actions/products_actions';

export class AdminAddWave extends Component {

  state = {
    formError: false,
    formSuccess: false,
    formdata: {
      name: {
        element: 'input',
        value: '',
        config: {
          name: 'wave_input',
          type: 'text',
          placeholder: 'Enter wave',
          className: "form-control form-control-lg"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ''
      }
    }
  }

  showCategoryItems = () => (
    this.props.products.waves ?
      this.props.products.waves.map((item, i) => (
        <div className="category_item" key={item._id}>
          {item.name}
        </div>
      ))
      : null
  )

  updateForm = element => {
    const newFormdata = update(element, this.state.formdata, 'waves');
    this.setState({
      formError: false,
      formdata: newFormdata
    })
  }

  resetFieldsHandler = () => {
    const newFormData = resetFields(this.state.formdata, 'waves');
    this.setState({
      formdata: newFormData,
      formSuccess: true
    })
  }

  submitForm = event => {
    event.preventDefault();
    let dataToSubmit = generateData(this.state.formdata, 'waves');
    let formIsValid = isFormValid(this.state.formdata, 'waves');
    let existingWaves = this.props.products.waves;
  

    if(formIsValid) {
      this.props.dispatch(addWave(dataToSubmit, existingWaves)).then(response => {
        if(response.success) {
          this.resetFieldsHandler();
          this.props.alert.show('Wave added!');
        } else {
          this.setState({formError: true})
        }
      })
    } else {
      this.setState({
        formError: true
      })
    }
  }

  componentDidMount = () => {
    this.props.dispatch(getWaves());
  }

  render() {
    return (
      <div className="col-12 mt-3 col-sm-5 mt-sm-0">
        <div className="card">
        <div className="card-header text-center">
          <div>Wave</div>
        </div>
        <div className="card-body">
        <div className="row">
          <div className="col-6 add_wave_list text-center">
            {this.showCategoryItems()}
          </div>
          <div className="col-6 add_wave d-flex justify-content-center align-items-center">
            <form onSubmit={(event)=> this.submitForm(event)}>
              <FormField
                id={'name'}
                formdata={this.state.formdata.name}
                change={(element)=> this.updateForm(element)}
              ></FormField>
              <div className="mt-4 text-center">
                <button className="btn text-uppercase" onClick={(event)=>this.submitForm(event)}>
                Add wave
                </button>
                { this.state.formError ?
                <div className="mt-2 error_label">
                  Entry required
                </div>
                : null }
              </div>
            </form>
          </div>
        </div>
        </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.products
})


export default connect(mapStateToProps)(withAlert(AdminAddWave));
