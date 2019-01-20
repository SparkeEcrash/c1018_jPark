import {
  REGISTER_USER,
  LOGIN_USER,
  AUTH_USER,
  LOGOUT_USER,
  UPDATE_USER_DATA,
  CLEAR_UPDATE_USER_DATA
} from '../actions/types';

export default function(state={}, action) {
  switch(action.type){
    case REGISTER_USER:
      return {...state, register: action.payload}
    case LOGIN_USER:
      return {...state, loginSuccess: action.payload}
    case AUTH_USER:
      return {...state, userData: action.payload}
    case LOGOUT_USER:
      return {...state}
    case UPDATE_USER_DATA:
      return {...state,updateUser: action.payload}
    case CLEAR_UPDATE_USER_DATA:
      return {...state,updateUser: action.payload}
    default:
      return state;
  }
}