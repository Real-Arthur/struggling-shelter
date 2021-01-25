const interestedReducer = (state = [], action) => {
  
  switch (action.type) {
    case 'SET_INTERESTED':
      return action.payload;
    default:
      return state;
  }
};

export default interestedReducer;