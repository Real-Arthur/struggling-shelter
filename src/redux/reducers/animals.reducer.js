import animalTypes from '../../components/AnimalTypes';
const animalsReducer = (state = [], action) => {
  animalTypes.map((animal) => {
    switch (action.type) {
      case `SET_${animal}`:
        return action.payload;
      default:
        return state;
    }
  })
};

export default animalsReducer;