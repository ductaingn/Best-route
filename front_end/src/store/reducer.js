const initState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POS':
      return [...state, {
        name: action.name,
        position: action.position
      }];
    case 'DELETE_POS':
      return state.filter(pos => pos.position !== action.position)
    default:
      throw Error('Unknown action: ' + action.type);
  }
};

export { initState }
export default reducer;
