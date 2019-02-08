import React, { Component } from 'react'

import FormField from '../../components/utils/Form/formfield';
import { update, generateData, isFormValid, resetFields } from'../../components/utils/Form/formActions';

import { connect } from 'react-redux';
import {withAlert} from 'react-alert';
import { getSeries, addSeries, deleteSeries } from '../../actions/products_actions';

export class AdminAddSeries extends Component {

  state = {
    formError: false,
    formSuccess: false,
    formdata: {
      name: {
        element: 'input',
        value: '',
        config: {
          name: 'series_input',
          type: 'text',
          placeholder: 'Enter series',
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

  showCategoryItems = () => {
    return (this.props.products.series ?
      this.props.products.series.map((item, i) => (
        <div className="category_item" key={item._id} onClick={()=>{this.deleteSeries(item._id)}}>
          {item.name}
        </div>
      ))
      : null
    )
    }

  deleteSeries = id => {
    let existingSeries = this.props.products.series;
    this.props.dispatch(deleteSeries(id, existingSeries)).then(response => {
      if(response.existing) {
        this.props.alert.show('Delete Failed: Series is in use');
      } 
      if(response.success) {
        this.props.alert.show('Series Deleted');
      }
    })
  }

  updateForm = element => {
    const newFormdata = update(element, this.state.formdata, 'series');
    this.setState({
      formError: false,
      formdata: newFormdata
    })
  }

  resetFieldsHandler = () => {
    const newFormData = resetFields(this.state.formdata, 'series');
    this.setState({
      formdata: newFormData,
      formSuccess: true
    })
  }

  submitForm = event => {
    event.preventDefault();
    let dataToSubmit = generateData(this.state.formdata, 'series');
    let formIsValid = isFormValid(this.state.formdata, 'series');
    let existingSeries = this.props.products.series;

    if(formIsValid) {
      this.props.dispatch(addSeries(dataToSubmit, existingSeries)).then(response => {
        if(response.success) {
          this.resetFieldsHandler();
          this.props.alert.show('Series added!');
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
    this.props.dispatch(getSeries());
  }

  render() {
    return (
      <div className="col-12 mt-3 col-sm-6 mt-sm-0">
        <div className="card">
        <div className="card-header text-center">
          <div>Series</div>
        </div>
        <div className="card-body">
        <div className="row">
          <div className="col-6 add_series_list text-center">
            {this.showCategoryItems()}
          </div>
          <div className="col-6 add_series d-flex justify-content-center align-items-center">
            <form onSubmit={(event)=> this.submitForm(event)}>
              <FormField
                id={'name'}
                formdata={this.state.formdata.name}
                change={(element)=> this.updateForm(element)}
              ></FormField>
              <div className="text-center mt-4">
              <button className="btn text-uppercase" onClick={(event)=>this.submitForm(event)}>
                Add series
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


export default connect(mapStateToProps)(withAlert(AdminAddSeries));
