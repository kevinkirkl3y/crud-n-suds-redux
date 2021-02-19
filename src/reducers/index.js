import formVisibleReducer from './form-visible-reducer';
import kegInventoryReducer from './keg-inventory-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  kegInventory: kegInventoryReducer
})

export default rootReducer;