import kegInventoryReducer from '../../reducers/keg-inventory-reducer';

describe('kegInventoryReducer', () => {
  let action;
  const currentState = {
    1: {
      name: 'HTMLager',
      brand: 'CSS Brewing',
      alcCont: '4.5',
      price: '6.00',
      quantity: 4,
      id: 1
    },
    2: {
      name: 'C# Hopped Ale',
      brand: 'CSS Brewing',
      alcCont: '7.2',
      price: '7.00',
      quantity: 2,
      id: 2
    }
  }
  const kegInfo = {
    1: {
      name: 'HTMLager',
      brand: 'CSS Brewing',
      alcCont: '4.5',
      price: '6.00',
      quantity: 5,
      id: 1
    }
  }
  test('Should return default state if there is no action passed into the reducer', () => {
    expect(kegInventoryReducer({}, {type: null})).toEqual({});
  });
  test('Should successfully add new keg data to kegInventory', () => {
    const {name, brand, alcCont, price, quantity, id} = kegInfo;
    action = {
      type: 'ADD_KEG',
      name,
      brand,
      alcCont,
      price,
      quantity,
      id
    }
    expect(kegInventoryReducer({}, action)).toEqual({
      [id] : {
        name,
        brand,
        alcCont,
        price,
        quantity,
        id
      }
    });
  });
  test('Should delete a keg from keg inventory', () => {
    action = {
      type: 'DELETE_KEG',
      id:1
    };
    expect(kegInventoryReducer(currentState, action)).toEqual({
      2: {
        name: 'C# Hopped Ale',
        brand: 'CSS Brewing',
        alcCont: '7.2',
        price: '7.00',
        quantity: 2,
        id: 2
      }
    });
  });

});

