import axios from 'axios';
import {
  GET_PRODUCTS_TO_SHOP,
  GET_SERIES,
  GET_WAVES
} from './types';

import { PRODUCT_SERVER } from '../components/utils/misc';

export function getProductsToShop(skip, limit, filters=[], previousState = []) {
  const data = {
    skip,
    limit,
    filters
  }
  const request = axios.post(`${PRODUCT_SERVER}/shop`, data)
    .then(response => {
      let newState = [
        ...previousState,
        ...response.data.articles
      ]
      return {
        size: response.data.size,
        articles: newState
      }
    });
  return {
    type: GET_PRODUCTS_TO_SHOP,
    payload: request
  }
}

export function getSeries() {
  const request = axios.get(`${PRODUCT_SERVER}/series`)
    .then(response=> response.data);

    return {
      type: GET_SERIES,
      payload: request
    }
}

export function getWaves() {
  const request = axios.get(`${PRODUCT_SERVER}/waves`)
    .then(response=> response.data);

    return {
      type: GET_WAVES,
      payload: request
    }
}