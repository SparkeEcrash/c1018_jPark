import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog';

import FormField from '../../components/utils/Form/formfield';
import { update, generateData, isFormValid, resetFields } from'../../components/utils/Form/formActions';

import { connect } from 'react-redux';
import { getSeries, addSeries } from '../../actions/products_actions';

import './AdminAddSeries.css';

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
    console.log(this.props.products);
    return (this.props.products.series ?
      this.props.products.series.map((item, i) => (
        <div className="category_item" key={item._id}>
          {item.name}
        </div>
      ))
      : null
    )
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
        console.log(response);
        if(response.success) {
          this.resetFieldsHandler();
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

  handleClose = () => {
    this.setState({ formSuccess: false })
  }

  componentDidMount = () => {
    this.props.dispatch(getSeries());
  }

  render() {
    return (
      <div className="col-6">
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
              <button className="btn btn-large text-uppercase" onClick={(event)=>this.submitForm(event)}>
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
        <Dialog
          open={this.state.formSuccess}
          onClose={this.handleClose}
        >
          <div className="dialog_alert text-center">
            <h1>Series Added</h1>
            <h3>
              Series has been added
            </h3>
          </div>
        </Dialog>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.products
})


export default connect(mapStateToProps)(AdminAddSeries)
