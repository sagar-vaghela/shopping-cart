import * as types from "../lib/constants";
import { products, productType } from "../mock";

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

export const getItems = () => {
  return dispatch => {
    // Used for Start Fetching Data
    dispatch(getItemsStarted());
    
    // Used when get Success Response
    dispatch(getItemsSucceeded(products));

    // Used when get error 
    dispatch(getItemsFailed("error.response"));
  };
};


// export const getProductList = () => {
//   return dispatch => {
//     // Used for Start Fetching Data
//     dispatch(getItemsStarted());
    
//     // Used when get Success Response
//     dispatch(getItemsSucceeded(productType));

//     // Used when get error 
//     dispatch(getItemsFailed("error.response"));
//   };
// };