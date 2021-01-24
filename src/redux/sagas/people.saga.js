import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* searchPeople(action) {
    console.log('SEARCH PEOPLE');    
    // let response = yield axios({
    //     method: 'GET',
    //     url: '/api/byIngredients',
    //     params: {
    //         ingredients: action.payload
    //     }
    // })
    // console.log('response by ingredients', response.data);
    // yield put({
    //   type: 'SET_BY_INGREDIENTS',
    //   payload: response.data
    // })
}

function* peopleSaga() {
    yield takeLatest('FETCH_PEOPLE', searchPeople);
  }

  export default peopleSaga;