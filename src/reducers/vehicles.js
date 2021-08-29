const initialState = {};

export default function reducer(state = initialState, action) {
  console.log('state:', state, 'action:', action);
  switch (action.type) {
    case 'add':
      return action.payload;
    default:
      return state;
  }
}
