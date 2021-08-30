const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'create_vehicle_array':
      const newState = {
        ...state,
        vehicleArray: action.payload,
      };
      return newState;
    default:
      return state;
  }
}
