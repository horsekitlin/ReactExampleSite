import { combineReducers } from 'redux';

import products from "./ProductReducer";
import carts from "./CartReducer";
import auth from './AuthReducer';
import errors from "./ErrorReducer";

export default combineReducers({
  products,
  carts,
  auth,
  errors,
});
