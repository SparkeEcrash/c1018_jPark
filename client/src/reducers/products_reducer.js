import {
  GET_PRODUCTS_TO_SHOP,
  GET_SERIES,
  GET_WAVES
} from '../actions/types';

export default function(state={}, action) {
  switch(action.type){
    case GET_PRODUCTS_TO_SHOP:
      return {
        ...state,
        toShop: action.payload.articles,
        toShopSize: action.payload.size}
    case GET_SERIES:
      return {...state, series: action.payload}
    case GET_WAVES:
      return {...state, waves: action.payload}
    default:
      return state;
  }
}