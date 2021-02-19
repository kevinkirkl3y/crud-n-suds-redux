import * as actions from './../../actions';

describe('crud-n-suds actions', () => {
  it('deleteKeg should creat DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: 'DELETE_KEG',
      id:1
    });
  });
  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });
  it('addKeg shoud create an ADD_KEG action', () => {
    expect(actions.addKeg({
      name: 'HTMLager',
      brand: 'CSS Brewing',
      alcCont: '4.5',
      price: '6.00',
      quantity: 4,
      id: 1
    }
    )).toEqual({
      type: 'ADD_KEG',
      name: 'HTMLager',
      brand: 'CSS Brewing',
      alcCont: '4.5',
      price: '6.00',
      quantity: 4,
      id: 1
    });
  });
});