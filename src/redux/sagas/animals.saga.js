import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* searchAnimals(action) {
    console.log('SEARCH ANIMALS', action.type);    
    console.log('SEARCH ANIMALS', action.payload);
    let animalType = action.payload;  
    let response = yield axios({
        method: 'GET',
        url: `/api/animals`,
        params: {
          animalType: animalType
        }
    })
    console.log('response by animals router', response.data);
    let animalsToReduce = animalType.toUpperCase()
    yield put({
      type: `SET_${animalsToReduce}`,
      payload: response.data
    })
}

function* animalsSaga() {
    yield takeLatest('FETCH_ANIMALS', searchAnimals);
  }

  export default animalsSaga;