import React, { Fragment, Component } from 'react';
import FormField from '../utils/Form/formfield';

import { connect } from 'react-redux';
import { updateUserData, clearUpdateUser } from '../../actions/user_actions';
import { update, generateData, isFormValid, populateFields } from '../utils/Form/formActions';

export class UserProfileInformation extends Component {
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
          className: 'form-control form-control-lg text-capitalize'
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
          className: 'form-control form-control-lg text-capitalize'
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
          className: 'form-control form-control-lg'
        },
        validation: {
          required: true,
          email: true
        },
        showlabel: true,
        valid: false,
        touched: false,
        validationMessage: ''
      }
    }
  }

  updateForm = (element) => {
    const newFormdata = update(element,this.state.formdata,'update');
    this.setState({
      formError: false,
      formdata: newFormdata
    })
  }
  
  submitForm = (event) => {
    event.preventDefault();
    let dataToSubmit = generateData(this.state.formdata, 'update_user');
    let formIsValid = isFormValid(this.state.formdata,'update_user');

    if(formIsValid) {
      this.props.dispatch(updateUserData(dataToSubmit)).then(()=>{
        if(this.props.user.updateUser.success){
          this.setState({
            formSuccess: true
          }, () => {
            setTimeout(()=>{
              this.props.dispatch(clearUpdateUser());
              this.props.update('default');
              this.setState({
                formSuccess: false
              })
            }, 2000)
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
    const newFormData = populateFields(this.state.formdata, this.props.user.userData);
    this.setState({
      formdata: newFormData
    })
  }

  render() {
    return (
      <div className="card text-center">
        <div className="card-header">
          <h3 className="text-capitalize mt-2">Account Update</h3>
        </div>
        <div className="card-body">
          <form>
            <div className="">
              <FormField id={'name'} formdata={this.state.formdata.name} change={(element) => this.updateForm(element)}></FormField>
            </div>
            <div className="mt-3">
              <FormField id={'lastname'} formdata={this.state.formdata.lastname} change={(element) => this.updateForm(element)}></FormField>
            </div>
            <div className="mt-3">
              <FormField id={'email'} formdata={this.state.formdata.email} change={(element) => this.updateForm(element)}></FormField>
            </div>
            <div className="mt-3 form-row align-items-center d-flex justify-content-around">
              { this.state.formError ?
                <div className="error_label">
                  Please check your data
                </div>
                : null}
              <button className="btn btn-large text-uppercase contact-btn col-10 col-md-5" onClick={(event)=>this.submitForm(event)}>
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user  
})

export default connect(mapStateToProps)(UserProfileInformation)