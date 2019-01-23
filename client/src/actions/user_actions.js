import axios from 'axios';
import {
  REGISTER_USER,
  LOGIN_USER,
  AUTH_USER,
  LOGOUT_USER,
  UPDATE_USER_DATA,
  CLEAR_UPDATE_USER_DATA,
  ADD_TO_USER_CART
} from './types';

import { USER_SERVER } from '../components/utils/misc';

export function registerUser(dataToSubmit) {
  const request = axios.post(`${USER_SERVER}/register`, dataToSubmit)
    .then(response => response.data);
  return {
    type: REGISTER_USER,
    payload: request
  }
}

export function loginUser(dataToSubmit) {
  const request = axios.post(`${USER_SERVER}/login`, dataToSubmit)
    .then(response => response.data);
  
  return {
    type: LOGIN_USER,
    payload: request
  }
}

export function auth() {
  const request = axios.get(`${USER_SERVER}/auth`)
  .then(response => response.data);

  return {
    type: AUTH_USER,
    payload: request
  }
}

export function logoutUser() {
  const request = axios.get(`${USER_SERVER}/logout`)
    .then(response => response.data);

    return {
      type: LOGOUT_USER,
      payload: request
    }
}

export function updateUserData(data) {
  const request = axios.post(`${USER_SERVER}/update_profile`, data)
    .then(response => {
      return response.data
    });

  return {
    type: UPDATE_USER_DATA,
    payload: request
  }
} 

export function clearUpdateUser(){
  return {
    type: CLEAR_UPDATE_USER_DATA,
    payload: ''
  }
}

export function addToCart(_id) {
  const request = axios.post( `${USER_SERVER}/addToCart?productId=${_id}`)
    .then(response => response.data)
  return {
    type: ADD_TO_USER_CART,
    payload: request
  }
}