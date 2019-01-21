import React, {Component} from 'react';
import { connect } from 'react-redux';
import { auth } from '../actions/user_actions';
import CircularProgress from '@material-ui/core/CircularProgress';

import './auth.css';

export default function(ComposedClass, reload, adminRoute = null) {
  class AuthenticationCheck extends Component {
    state = {
      loading: true
    }

    componentDidMount = () => {
      this.props.dispatch(auth()).then(response => {
        console.log(this.props)
        let user = this.props.user.userData;
        console.log('HERE', user)
        if(!user.isAuth){
          //Authentication fails
          if(reload) {
            this.props.history.push('/')
          }
        } else {
          //Authentication passes
          if(adminRoute && !user.isAdmin) {
            this.props.history.push('/user/dashboard')
          }

          if(reload === false){
          this.props.history.push('/user/dashboard')
          }
        }
        this.setState({loading:false});
      })
    }

  render() { 
    if(this.state.loading) {
      return (
        <div className="main_loader">
          <CircularProgress style={{color:'#2196F3'}} thickness={7}/>
        </div>
      )
    }
    return (  
    <ComposedClass {...this.props} user={this.props.user}/>
    );
  }
}


  function mapStateToProps(state){
    return {
      user: state.user
    }
  }

  return connect(mapStateToProps)(AuthenticationCheck);
}