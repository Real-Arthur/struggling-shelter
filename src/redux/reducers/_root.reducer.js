import { combineReducers } from 'redux';
import animalsReducer from './animals.reducer';
import peopleReducer from './people.reducer';
import staffReducer from './staff.reducer';
import interestedReducer from './interested.reducer';

const rootReducer = combineReducers({
  animalsReducer,
  peopleReducer,
  staffReducer,
  interestedReducer
});

export default rootReducer;