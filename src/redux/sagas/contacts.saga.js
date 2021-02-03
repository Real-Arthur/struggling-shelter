import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* searchContacts(action) {
    console.log('SEARCH CONTACTS', action.type);
    let response = yield axios({
        method: 'GET',
        url: `/api/contacts`
    })
    console.log('response by contacts router', response.data);
    yield put({
      type: `SET_CONTACTS`,
      payload: response.data
    })
}
function* setAsContacted(action) {
  console.log('SET AS CONTACTED', action.type);
  console.log('SET AS CONTACTED', action.payload);
  let response = yield axios({
      method: 'PUT',
      url: `/api/contacts`,
      data: {
        id: action.payload.id
      }
  })
  console.log('response by contacts router', response);
  yield put({
    type: `FETCH_CONTACTS`
  })
}
function* setInterested(action) {
  console.log('INTERESTED', action.type);    
  console.log('INTERESTED', action.payload);
  let response = yield axios({
    method: 'POST',
    url: '/api/contacts',
    data: action.payload
  })
  console.log('create interest response', response);
  
}

function* animalsSaga() {
    yield takeLatest('FETCH_CONTACTS', searchContacts);
    yield takeLatest('SET_CONTACTED', setAsContacted);
    yield takeLatest('CREATE_INTERESTED', setInterested);
  }

  export default animalsSaga;