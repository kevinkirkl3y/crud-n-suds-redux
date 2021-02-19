import kegInventoryReducer from '../../reducers/keg-inventory-reducer';

describe('kegInventoryReducer', () => {
  let action;
  const kegInfo = {
    name: 'HTMLager',
    brand: 'CSS Brewing',
    alcCont: '4.5',
    price: '6.00',
    id: 1

  }
  test('Should return default state if there is no action passed into the reducer', () => {
    expect(kegInventoryReducer({}, {type: null})).toEqual({});
  });
  test('Should successfully add new keg data to kegInventory', () => {
    const {name, brand, alcCont, price, id} = kegInfo;
    action = {
      type: 'ADD_KEG',
      name,
      brand,
      alcCont,
      price,
      id
    }
    expect(kegInventoryReducer({}, action)).toEqual({
      [id] : {
        name,
        brand,
        alcCont,
        price,
        id
      }
    })
  })
});

