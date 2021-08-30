const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'add':
      const newState = {...state, vehicles: action.payload};
      return newState;
    default:
      return state;
  }
}
