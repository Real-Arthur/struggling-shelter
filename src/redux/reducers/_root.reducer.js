import { combineReducers } from 'redux';
import animalsReducer from './animals.reducer';
import peopleReducer from './people.reducer';
import staffReducer from './staff.reducer';

const rootReducer = combineReducers({
  animalsReducer,
  peopleReducer,
  staffReducer
});

export default rootReducer;