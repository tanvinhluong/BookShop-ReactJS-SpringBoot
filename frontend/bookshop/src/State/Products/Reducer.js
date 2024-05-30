import {
  DELETE_PRODUCT_SUCCESS,
  FIND_PRODUCTS_FAILURE,
  FIND_PRODUCTS_REQUEST,
  FIND_PRODUCTS_SUCCESS,
  FIND_PRODUCT_ID_FAILURE,
  FIND_PRODUCT_ID_REQUEST,
  FIND_PRODUCT_ID_SUCCESS,
  GET_ALL_PRODUCTS_FAILURE,
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_SUCCESS,
} from './ActionType'

const initialState = {
  products: [],
  product: null,
  loading: false,
  error: null,
  deletedProducts: null,
}

export const customerProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS_REQUEST:
    case FIND_PRODUCTS_REQUEST:
    case FIND_PRODUCT_ID_REQUEST:
      return { ...state, loading: true, error: null }

    case GET_ALL_PRODUCTS_SUCCESS:
    case FIND_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      }
    case FIND_PRODUCT_ID_SUCCESS:
      return { ...state, product: action.payload, loading: false }

    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        deletedProducts: action.payload,
      }
    case GET_ALL_PRODUCTS_FAILURE:
    case FIND_PRODUCTS_FAILURE:
    case FIND_PRODUCT_ID_FAILURE:
      return { ...state, loading: false, error: action.payload }

    default:
      return { ...state }
  }
}
