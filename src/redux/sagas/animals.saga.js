import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
// AdoptionTabs page dispathes to searchAnimals
// for list of unadopted animals
function* searchAnimals(action) {
  let animalType = action.payload;  
  let response = yield axios({
    method: 'GET',
    url: `/api/animals`,
    params: {
      animalType: animalType
    }
  })
  // send list of animals to reducer
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