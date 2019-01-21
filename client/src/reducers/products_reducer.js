import {
  GET_PRODUCTS_TO_SHOP,
  GET_SERIES,
  GET_WAVES,
  GET_PRODUCT_DETAIL,
  CLEAR_PRODUCT_DETAIL
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
    case GET_PRODUCT_DETAIL:
      return {...state, prodDetail: action.payload}
    case CLEAR_PRODUCT_DETAIL:
      return {...state, prodDetail: action.payload}
    default:
      return state;
  }
}