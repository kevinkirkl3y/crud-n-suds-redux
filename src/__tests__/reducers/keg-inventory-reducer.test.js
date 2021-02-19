import kegInventoryReducer from '../../reducers/keg-inventory-reducer';

describe('kegInventoryReducer', () => {
  test('Should return default state if there is no action passed into the reducer', () => {
    expect(kegInventoryReducer({}, {type: null})).toEqual({});
  });
});

