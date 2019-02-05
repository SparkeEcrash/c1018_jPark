import axios from 'axios';
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
} from './types';

import { PRODUCT_SERVER } from '../components/utils/misc';

export function getProductDetail(id) {
  const request = axios.get(`${PRODUCT_SERVER}/articles_by_id?id=${id}&type=single`)
  .then(response=> {
    return response.data[0]
  })

  return {
    type: GET_PRODUCT_DETAIL,
    payload: request
  }

}

export function clearProductDetail() {
  return {
    type: CLEAR_PRODUCT_DETAIL,
    payload: ''
  }
}

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

export function submitProduct(datatoSubmit){
  const request = axios.post(`${PRODUCT_SERVER}/article`, datatoSubmit)
    .then(response => response.data);

    return {
      type: SUBMIT_PRODUCT,
      payload: request
    }
}

export function deleteProduct(datatoSubmit){
  const request = axios.delete(`${PRODUCT_SERVER}/article`, {data: {id: datatoSubmit}})
    .then(response => response.data);

    return {
      type: DELETE_PRODUCT,
      payload: request
    }
}

export function clearProduct() {
  return {
    type: CLEAR_PRODUCT,
    payload: ''
  }
}

export function addSeries(dataToSubmit, existingSeries) {
  const request = axios.post(`${PRODUCT_SERVER}/series`, dataToSubmit)
    .then(response => {
      let series = [
        ...existingSeries,
        response.data.series
      ];
      return {
        success: response.data.success,
        series
      }
    });

    return {
      type: ADD_SERIES,
      payload: request
    }
}

export function deleteSeries(dataToSubmit, existingSeries) {
  const request = axios.delete(`${PRODUCT_SERVER}/series`, {data: {id: dataToSubmit, series: existingSeries}})
    .then(response => {
      return {
        success: response.data.success,
        series: response.data.series,
        existing: response.data.existing
      }
    })

    return {
      type: DELETE_SERIES,
      payload: request
    }
}

export function addWave(dataToSubmit, existingWaves) {
  const request = axios.post(`${PRODUCT_SERVER}/wave`, dataToSubmit)
    .then(response => {
      let waves = [
        ...existingWaves,
        response.data.wave
      ];
      return {
        success: response.data.success,
        waves
      }
    });

    return {
      type: ADD_WAVE,
      payload: request
    }
}

export function deleteWave(dataToSubmit, existingWaves) {
  const request = axios.delete(`${PRODUCT_SERVER}/wave`, {data: {id: dataToSubmit, waves: existingWaves}})
    .then(response => {
      return {
        success: response.data.success,
        waves: response.data.waves,
        existing: response.data.existing
      }
    })

    return {
      type: DELETE_WAVE,
      payload: request
    }
}