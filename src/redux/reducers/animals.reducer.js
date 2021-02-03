const animalsReducer = (state = [], action) => {
  
  switch (action.type) {
    case 'SET_CAT':
      return action.payload;
    case 'SET_DOG':
      return action.payload;
    case 'SET_RABBIT':
      return action.payload;
    case 'SET_SNAKE':
      return action.payload;
    case 'SET_HAMSTER':
      return action.payload;
    case 'SET_MOUSE':
      return action.payload;
    case 'SET_PIG':
      return action.payload;
    case 'SET_SPIDER':
      return action.payload;
    case 'SET_BIRD':
      return action.payload;
    default:
      return state;
  }
};

export default animalsReducer;