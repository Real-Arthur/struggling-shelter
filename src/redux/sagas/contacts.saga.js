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

function* animalsSaga() {
    yield takeLatest('FETCH_CONTACTS', searchContacts);
    yield takeLatest('SET_CONTACTED', setAsContacted);
  }

  export default animalsSaga;