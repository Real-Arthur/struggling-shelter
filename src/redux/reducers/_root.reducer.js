import { combineReducers } from 'redux';
import animalsReducer from './animals.reducer';
import peopleReducer from './people.reducer';
import staffReducer from './staff.reducer';
import interestedReducer from './interested.reducer';
import errorsReducer from './errors.reducer';
import userReducer from './user.reducer';

const rootReducer = combineReducers({
  animalsReducer,
  peopleReducer,
  staffReducer,
  interestedReducer,
  errorsReducer,
  userReducer
});

export default rootReducer;