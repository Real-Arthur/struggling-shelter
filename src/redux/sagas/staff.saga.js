import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* searchStaff(action) {
    console.log('SEARCH STAFF');    
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

function* staffSaga() {
    yield takeLatest('FETCH_STAFF', searchStaff);
  }

  export default staffSaga;