import React, { Component } from 'react'

import FormField from '../../../components/utils/Form/formfield';
import { update, generateData, isFormValid, populateOptionFields, resetFields } from '../../../components/utils/Form/formActions';
import FileUpload from '../../../components/utils/Form/fileupload';

import { connect } from 'react-redux';
import {withAlert} from 'react-alert';
import { getSeries, getWaves, addProduct, clearProduct } from
'../../../actions/products_actions';

export class productForm extends Component {
  state = {
    formError: false,
    formSuccess: false,
    formdata: {
      name: {
        element: 'input',
        value: '',
        config: {
          name: 'name_input',
          type: 'text',
          placeholder: 'Enter name',
          label: 'user',
          className: 'form-control form-control-sm'
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: '',
        showlabel: true
      },
      description: {
        element: 'textarea',
        value: '',
        config: {
          name: 'description_input',
          type: 'text',
          placeholder: 'Enter Amiibo description',
          label: 'Enter Amiibo Description',
          className: 'form-control form-control-sm'
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: '',
        showlabel: false
      },
      price: {
        element: 'input',
        value: '',
        config: {
          name: 'price_input',
          type: 'number',
          placeholder: 'Enter the price',
          label: 'dollar-sign',
          className: 'form-control form-control-sm'
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: '',
        showlabel: true
      },
      series: {
        element: 'select',
        value: '',
        config: {
          name: 'series_input',
          options: [],
          label: 'Series',
          className: 'form-control form-control-sm'
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: '',
        showlabel: true
      },
      shipping: {
        element: 'select',
        value: '',
        config: {
          label: 'Shipping',
          name: 'shipping_input',
          className: 'form-control form-control-sm',
          options: [
            {key: true, value: 'Yes'},
            {key: false, value: 'No'}
          ],
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: '',
        showlabel: true
      },
      available: {
        element: 'select',
        value: '',
        config: {
          label: 'Available in stock',
          name: 'available_input',
          className: 'form-control form-control-sm',
          options: [
            {key: true, value: 'Yes'},
            {key: false, value: 'No'}
          ]
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: '',
        showlabel: true
      },
      wave: {
        element: 'select',
        value: '',
        config: {
          label: 'Wave',
          name: 'wave_input',
          className: 'form-control form-control-sm',
          options: []
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: '',
        showlabel: true
      },
      publish: {
        element: 'select',
        value: '',
        config: {
          label: 'Publish',
          name: 'publish_input',
          className: 'form-control form-control-sm',
          options: [
            {key: true, value: 'Public'},
            {key: false, value: 'Hidden'}
          ]
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: '',
        showlabel: true
      },
      images: {
        values: [],
        validation: {
          required: false
        },
        valid: true,
        touched: false,
        validationMessage: '',
        showlabel: true
      }
    }
  }

  updateFields = (newFormData) => {
    this.setState({
      formdata: newFormData
    })
  }

  updateForm = (element) => {
    const newFormdata = update(element, this.state.formdata, 'products');
    this.setState({
      formError: false,
      formdata: newFormdata
    })
  }

  resetFieldHandler = () => {
    const newFormData = resetFields(this.state.formdata, 'products');

    this.setState({
      formdata: newFormData,
      formSuccess: true
    });
    setTimeout(() => {
      this.setState({
        formSuccess: false
      }, () => {
        this.props.dispatch(clearProduct())
      })
    }, 3000)
  }

  addProduct = (event) => {
    event.preventDefault();
    let dataToSubmit = generateData(this.state.formdata, 'products');
    let formIsValid = isFormValid(this.state.formdata, 'products');
    if(formIsValid) {
      this.props.dispatch(addProduct(dataToSubmit)).then(()=> {
        if(this.props.products.addProduct.success) {
          this.props.alert.show(`${this.state.formdata.name.value} added!`)
          this.resetFieldHandler();
        } else {
          this.setState({
            formError: true
          })
        }
      })
    } else {
      this.setState({
        formError: true
      })
    }
  }

  componentDidMount() {
    const formdata = this.state.formdata;
    this.props.dispatch(getSeries()).then( response => {
      const newFormData = populateOptionFields(formdata, this.props.products.series, 'series');
      this.updateFields(newFormData)
    });
    this.props.dispatch(getWaves()).then( response => {
      const newFormData = populateOptionFields(formdata, this.props.products.waves, 'wave');
      this.updateFields(newFormData);
    })
  }

  imagesHandler = images => {
    const newFormData = {
      ...this.state.formdata
    }

    newFormData['images'].value = images;
    newFormData['images'].valid = true;

    this.setState({
      formdata: newFormData
    })
  }

  renderSubmitButton = () => {
    switch(this.props.action) {
      case 'add':
        return (
          <div>
            <label htmlFor={'add_amibo'}>Submit</label>
            <div id={'add_amiibo'} className="add_amiibo_link mb-2" onClick={(event)=>this.addProduct(event)}>
              Add Amiibo
            </div> 
          </div>
      )
    default: 
    return null;
  }
}

  render() {
    return (
        <form onSubmit={(event)=> this.submitForm(event)}>
          <div className="col-12">
            <div className="row mt-3 mt-sm-0">
              <div className="col-12 mx-auto">
                <div className="card">
                  <div className="card-body">
                    <FileUpload
                      imagesHandler={(images)=>this.imagesHandler(images)} reset={this.state.formSuccess}
                    ></FileUpload>
                    <FormField
                      id={'description'}
                      formdata={this.state.formdata.description}
                      change={(element)=> this.updateForm(element)}
                    ></FormField>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-12 col-lg-3 mx-auto">
                <div className="card">
                  <div className="card-body">
                    <label htmlFor={'name'}>Character Name</label>
                    <FormField
                      id={'name'}
                      formdata={this.state.formdata.name}
                      change={(element)=> this.updateForm(element)}
                    ></FormField>
                    <div className="my-3">
                    <label htmlFor={'price'}>Price</label>
                    <FormField
                      id={'price'}
                      formdata={this.state.formdata.price}
                      change={(element)=> this.updateForm(element)}
                    ></FormField>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3 mt-sm-0 col-12 col-lg-3 mx-auto">
                <div className="card">
                  <div className="card-body">
                    <FormField
                      id={'series'}
                      formdata={this.state.formdata.series}
                      change={(element) => this.updateForm(element)}
                    ></FormField>
                    <FormField
                      id={'wave'}
                      formdata={this.state.formdata.wave}
                      change={(element)=> this.updateForm(element)}
                    ></FormField>
                  </div>
                </div>
              </div>
              <div className="mt-3 mt-sm-0 col-12 col-lg-3 mx-auto">
                <div className="card">
                  <div className="card-body">
                    <FormField
                      id={'available'}
                      formdata={this.state.formdata.available}
                      change={(element)=> this.updateForm(element)}
                    ></FormField>
                    <FormField
                      id={'shipping'}
                      formdata={this.state.formdata.shipping}
                      change={(element)=> this.updateForm(element)}
                    ></FormField>
                  </div>
                </div>
              </div>
              <div className="mt-3 mt-sm-0 col-12 col-lg-3 mx-auto">
                <div className="card">
                  <div className="card-body">
                    <FormField
                      id={'publish'}
                      formdata={this.state.formdata.publish}
                      change={(element)=> this.updateForm(element)}
                    ></FormField>
                    {this.renderSubmitButton()}
                    { this.state.formError ? 
                      <div className="error_label">
                        Please check your entries
                      </div>
                    : null }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(withAlert(productForm));
