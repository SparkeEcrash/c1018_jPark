import React, { Component } from 'react'
import FormField from '../utils/Form/formfield';
import MyButton from '../utils/button';

import { update, generateData, isFormValid } from '../utils/Form/formActions';
import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux';
import { loginUser } from '../../actions/user_actions';

export class LoginForm extends Component {
  state = {
    formError: false,
    formSuccess: false,
    formdata: {
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
    let dataToSubmit = generateData(this.state.formdata, 'login');
    let formIsValid = isFormValid(this.state.formdata,'login');

    if(formIsValid) {
      this.props.dispatch(loginUser(dataToSubmit)).then(response => {
        if(response.loginSuccess) {
          this.props.history.push('/user/dashboard')
        } else {
          this.setState({
            formError: true
          })
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
      <div className="container">
        <div className="row">
          <div className="col-10 col-lg-6 mx-auto">
            <div className="card">
              <div className="card-header text-center text-uppercase">
                <h3 className="text-uppercase mt-2">Registered Members</h3>
              </div>
              <div className="card-body">
                <form>
                  <div className="my-2">
                    <FormField id={'email'} formdata={this.state.formdata.email} change={(element) => this.updateForm(element)}></FormField>
                  </div>
                  <div className="my-4">
                    <FormField id={'password'} formdata={this.state.formdata.password} change={(element) => this.updateForm(element)}></FormField>
                  </div>
                  <div className="form-row align-items-center d-flex justify-content-around">
                    <button  onClick={(event)=>this.submitForm(event)} className="btn text-uppercase col-5">Log in</button>
                    <div className="btn text-uppercase col-5">
                      <MyButton 
                        type="default" 
                        title="Sign up" 
                        linkTo="/register"
                        addStyles={{ color: 'black'}}
                        >
                      </MyButton>
                    </div>
                  </div>
                  { this.state.formError ? 
                    <div className="error_label mt-4">
                      No email address with matching password was found
                    </div>
                    :null}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(withRouter(LoginForm));