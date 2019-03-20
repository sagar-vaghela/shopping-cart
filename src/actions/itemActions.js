import * as types from "../lib/constants";
import { products } from "../mock";

// Get Items
const getItemsStarted = () => ({
  type: types.GET_ITEMS_STARTED
});

const getItemsSucceeded = data => ({
  type: types.GET_ITEMS_SUCCEEDED,
  payload: data
});

const getItemsFailed = error => ({
  type: types.GET_ITEMS_FAILED,
  payload: error,
  error: true
});

export const getItems = (payload) => {
  let productsData = payload? payload : products;
  return dispatch => {
    // Used for Start Fetching Data
    dispatch(getItemsStarted());
    
    // Used when get Success Response
    dispatch(getItemsSucceeded(productsData));

    // Used when get error 
    dispatch(getItemsFailed("error.response"));
  };
};