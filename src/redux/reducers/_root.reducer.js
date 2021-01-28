import { combineReducers } from 'redux';
import animalsReducer from './animals.reducer';
import staffReducer from './staff.reducer';
import interestedReducer from './interested.reducer';
import errors from './errors.reducer';
import user from './user.reducer';
import contactsReducer from './contacts.reducer';

const rootReducer = combineReducers({
  animalsReducer,
  staffReducer,
  interestedReducer,
  errors,
  user,
  contactsReducer
});

export default rootReducer;