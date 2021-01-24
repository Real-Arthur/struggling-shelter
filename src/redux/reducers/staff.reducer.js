const staffReducer = (state = [], action) => {
  
  switch (action.type) {
    case 'SET_STAFF':
      return action.payload;
    default:
      return state;
  }
};

export default staffReducer;