import React, { Component } from 'react'
import './RegisterForm.css';

import FormField from '../utils/Form/formfield';
import { update, generateData, isFormValid } from '../utils/Form/formActions';
import Dialog from '@material-ui/core/Dialog';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { registerUser } from '../../actions/user_actions';

export class RegisterForm extends Component {

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
          placeholder: 'Enter your first name',
          label: 'user',
          className: "form-control form-control-lg text-capitalize"
        },
        validation: {
          required: true,
        },
        showlabel: true,
        valid: false,
        touched: false,
        validationMessage: ''
      },
      lastname: {
        element: 'input',
        value: '',
        config: {
          name: 'lastname_input',
          type: 'text',
          placeholder: 'Enter your last name',
          label: 'users',
          className: "form-control form-control-lg text-capitalize"
        },
        validation: {
          required: true,
        },
        showlabel: true,
        valid: false,
        touched: false,
        validationMessage: ''
      },
      email: {
        element: 'input',
        value: '',
        config: {
          name: 'email_input',
          type: 'email',
          placeholder: 'Enter your email',
          label: 'envelope',
          className: "form-control form-control-lg"
        },
        validation: {
          required: true,
          email: true
        },
        showlabel: true,
        valid: false,
        touched: false,
        validationMessage: ''
      },
      password: {
        element: 'input',
        value: '',
        config: {
          name: 'password_input',
          type: 'password',
          placeholder: 'Enter your password',
          label: 'key',
          className: "form-control form-control-lg"
        },
        validation: {
          required: true
        },
        showlabel: true,
        valid: false,
        touched: false,
        validationMessage: ''
      },
      confirmPassword: {
        element: 'input',
        value: '',
        config: {
          name: 'confirm_password_input',
          type: 'password',
          placeholder: 'Confirm your password',
          label: 'lock',
          className: "form-control form-control-lg"
        },
        validation: {
          required: true,
          confirm: 'password'
        },
        showlabel: true,
        valid: false,
        touched: false,
        validationMessage: ''
      }
    }
  }

  updateForm = (element) => {
    const newFormdata = update(element,this.state.formdata,'register');
    this.setState({
      formError: false,
      formdata: newFormdata
    })
  }

  submitForm = (event) => {
    event.preventDefault();
    let dataToSubmit = generateData(this.state.formdata, 'register');
    let formIsValid = isFormValid(this.state.formdata,'register');

    if(formIsValid) {
      this.props.dispatch(registerUser(dataToSubmit))
        .then(response=> {
          if(response.success) {
            this.setState({
              formError: false,
              formSuccess: true
            });
            setTimeout(()=> {
              this.props.history.push('/login');
            },3000)
          } else {
            this.setState({formError: true})
          }
        }).catch(e => {
          this.setState({formError: true})
        })

        
    } else {
      this.setState({
        formError: true
      })
    }
  }

  render() {
    return (
      <div className="register container">
        <div className="row">
          <div className="col-10 col-lg-6 mx-auto">
            <div className="card">
              <div className="card-header text-uppercase text-center">
                <h3 className="text-uppercase mt-2">New Members</h3>
              </div>
              <div className="card-body">
                <form>
                  <div className="">
                    <FormField id={'name'} formdata={this.state.formdata.name} change={(element) => this.updateForm(element)}></FormField>
                  </div>
                  <div className="mt-2">
                    <FormField id={'lastname'} formdata={this.state.formdata.lastname} change={(element) => this.updateForm(element)}></FormField>
                  </div>
                  <div className="mt-2">
                    <FormField id={'email'} formdata={this.state.formdata.email} change={(element) => this.updateForm(element)}></FormField>
                  </div>
                  <div className="mt-2">
                    <FormField id={'password'} formdata={this.state.formdata.password} change={(element) => this.updateForm(element)}></FormField>
                  </div>
                  <div className="mt-2">
                    <FormField id={'confirmPassword'} formdata={this.state.formdata.confirmPassword} change={(element) => this.updateForm(element)}></FormField>
                  </div>
                  <div className="mt-2 form-row align-items-center d-flex justify-content-around">
                    { this.state.formError ?
                      <div className="error_label">
                        Please check your data
                      </div>
                      : null}
                    <button className="btn btn-large text-uppercase contact-btn col-10 col-md-5" onClick={(event)=>this.submitForm(event)}>
                      Create an Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Dialog open={this.state.formSuccess}>
          <div className="dialog_alert text-center">
            <h1>Account Created</h1>
            <h3>
              Please use your email to login
            </h3>
          </div>
        </Dialog>
      </div>
    )
  }
}

export default connect()(withRouter(RegisterForm));