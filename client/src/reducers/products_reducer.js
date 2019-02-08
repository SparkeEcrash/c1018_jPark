import {
  GET_PRODUCTS_TO_SHOP,
  GET_SERIES,
  ADD_SERIES,
  DELETE_SERIES,
  GET_WAVES,
  ADD_WAVE,
  DELETE_WAVE,
  GET_PRODUCT_DETAIL,
  CLEAR_PRODUCT_DETAIL,
  SUBMIT_PRODUCT,
  CLEAR_PRODUCT,
  DELETE_PRODUCT
} from '../actions/types';

export default function(state={}, action) {
  switch(action.type){
    case SUBMIT_PRODUCT:
      return {...state, addProduct: action.payload}
    case DELETE_PRODUCT:
      return {...state, deleteProduct: action.payload}
    case CLEAR_PRODUCT:
      return {...state, addProduct: action.payload}
    case GET_PRODUCTS_TO_SHOP:
      return {...state,
        toShop: action.payload.articles,
        toShopSize: action.payload.size}
    case GET_SERIES:
      return {...state, series: action.payload}
    case ADD_SERIES:
      return {...state, addSeries: action.payload.success, series: action.payload.series}
    case DELETE_SERIES: 
      return {...state, deleteSeries: action.payload.success, series: action.payload.series}
    case GET_WAVES:
      return {...state, waves: action.payload}
    case ADD_WAVE:
      return {...state, addWave: action.payload.success, waves: action.payload.waves}
    case DELETE_WAVE:
      return {...state, deleteWave: action.payload.success, waves: action.payload.waves}
    case GET_PRODUCT_DETAIL:
      return {...state, prodDetail: action.payload}
    case CLEAR_PRODUCT_DETAIL:
      return {...state, prodDetail: action.payload}
    default:
      return state;
  }
}