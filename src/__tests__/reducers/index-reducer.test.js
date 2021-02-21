import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import kegInventoryReducer from '../../reducers/keg-inventory-reducer';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import * as c from '../../actions/ActionTypes'

let store = createStore(rootReducer);


describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, {type: null})).toEqual({
      kegInventory: {},
      formVisibleOnPage: false
    });
  });
  test('Check that initial state of kegInventoryReducer matches root reducer', () => {
    expect(store.getState().kegInventory).toEqual(kegInventoryReducer(undefined, {type: null}));
  });
  test('Check that intial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null}));
  });
  test('Check that ADD_KEG action works for kegInventoryReducer and root reducer', () => {
    const action = {
      type: 'ADD_KEG',
      name: 'HTMLager',
      brand: 'CSS Brewing',
      alcCont: '4.5',
      price: '6.00',
      quantity: 4,
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().kegInventory).toEqual(kegInventoryReducer(undefined, action));
  });
  test('Check that TOGGLE_FORM action works for formVisibleReducer and root reducer', () => {
    const action = {
      type: 'TOGGLE_FORM',
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });
});
