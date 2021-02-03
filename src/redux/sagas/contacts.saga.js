import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* searchContacts() {
  let response = yield axios({
    method: 'GET',
    url: `/api/contacts`
  })
  yield put({
    type: `SET_CONTACTS`,
    payload: response.data
  })
}
// updates person's contacted status
// to true
function* setAsContacted(action) {
  yield axios({
    method: 'PUT',
    url: `/api/contacts`,
    data: {
      id: action.payload.id
    }
  })
  yield put({
    type: `FETCH_CONTACTS`
  })
}
// sends interested person's contact info to db
function* setInterested(action) {
  yield axios({
    method: 'POST',
    url: '/api/contacts',
    data: action.payload
  })
}

function* contactsSaga() {
    yield takeLatest('FETCH_CONTACTS', searchContacts);
    yield takeLatest('SET_CONTACTED', setAsContacted);
    yield takeLatest('CREATE_INTERESTED', setInterested);
  }

  export default contactsSaga;