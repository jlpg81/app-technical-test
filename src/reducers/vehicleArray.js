const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'create_vehicle_array':
      const newState = {
        ...state,
        vehicleArray: action.payload,
      };
      // console.log('vehicleArray.js previous state', state);
      // console.log('vehicleArray.js state objective:', newState);
      return newState;
    default:
      return state;
  }
}
