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

function* animalsSaga() {
    yield takeLatest('FETCH_CONTACTS', searchContacts);
  }

  export default animalsSaga;