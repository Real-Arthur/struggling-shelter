import { takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* setInterested(action) {
    console.log('INTERESTED', action.type);    
    console.log('INTERESTED', action.payload);
    let response = yield axios({
      method: 'POST',
      url: '/api/interested',
      data: action.payload
    })
    console.log('create interest response', response);
    
}

function* interestedSaga() {
    yield takeLatest('CREATE_INTERESTED', setInterested);
  }

  export default interestedSaga;