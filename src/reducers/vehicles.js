const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'add':
      const newState = {...state, vehicles: action.payload};
      // console.log('vehicle.js previous state', state);
      // console.log('vehicle.js state objective:', newState);
      return newState;
    default:
      return state;
  }
}
