import {
  REGISTER_USER,
  LOGIN_USER,
  AUTH_USER,
  LOGOUT_USER,
  UPDATE_USER_DATA,
  CLEAR_UPDATE_USER_DATA,
  ADD_TO_USER_CART,
  GET_CART_USER_ITEMS,
  REMOVE_CART_USER_ITEM,
  ON_SUCCESS_USER_BUY

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
      return {...state, userData: {...state.userData, ...action.payload.data}, updateUser: action.payload.response}
    case CLEAR_UPDATE_USER_DATA:
      return {...state, updateUser: action.payload}
    case ADD_TO_USER_CART: 
      return {...state, userData: {
        ...state.userData,
        cart: action.payload
      }}
    case GET_CART_USER_ITEMS:
      return {...state, cartDetail: action.payload }
    case REMOVE_CART_USER_ITEM:
      return {
        ...state,
        cartDetail: action.payload.cartDetail,
        userData: {
          ...state.userData, 
          cart: action.payload.cart
        }
      }
    case ON_SUCCESS_USER_BUY:
      return {
        ...state,
        successBuy: action.payload.success,
        userData: {
          ...state.userData,
          cart: action.payload.cart
        },
        cartDetail: action.payload.cartDetail
      }
    default:
      return state;
  }
}