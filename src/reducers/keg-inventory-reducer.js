export default (state = {}, action) => {
  const { name, brand, alcCont, price, id} = action;
  switch (action.type) {
    case 'ADD_KEG':
      return Object.assign({}, state, {
        [id] : {
          name,
          brand,
          alcCont,
          price,
          id
        }
      });
      default:
      return state;
  }
};