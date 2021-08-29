const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'set_origin':
      const newState = {
        ...state,
        origin: {latitude: 41.3874, longitude: 2.1686},
      };
      // console.log('origin.js previous state', state);
      // console.log('origin.js state objective:', newState);
      return newState;
    default:
      return state;
  }
}
