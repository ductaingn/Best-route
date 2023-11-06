const initState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POS_BY_CLICK':
      return [...state, {
        name: action.name,
        position: action.position
      }];
    case 'ADD_POS_BY_SEARCH':
        return [...state, {
          name: action.name,
          position: [action.position[1], action.position[0]]
        }];
    case 'DELETE_POS':
      return state.filter(pos => pos.position !== action.position)
    default:
      throw Error('Unknown action: ' + action.type);
  }
};

export { initState }
export default reducer;
