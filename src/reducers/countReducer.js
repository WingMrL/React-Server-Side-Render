import Actions from '../const/ActionTypes';

const initState = {
  index: 0
}

export default function count(state = initState, action) {
  switch(action.type) {
    case Actions.INDEX_ADD_ONE:
      return { ...state, index: state.index + 1 };
    default:
      return state;
  }
}