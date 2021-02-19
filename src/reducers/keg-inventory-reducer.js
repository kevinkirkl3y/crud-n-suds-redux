export default (state = {}, action) => {
  const { name, brand, alcCont, price, quantity, id} = action;
  switch (action.type) {
    case 'ADD_KEG':
      return Object.assign({}, state, {
        [id] : {
          name,
          brand,
          alcCont,
          price,
          quantity,
          id
        }
      });
    case 'DELETE_KEG':
      let newState = { ...state };
      delete newState[id];
      return newState;
      default:
      return state;
  }
};