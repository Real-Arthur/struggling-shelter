// import { put, takeLatest } from 'redux-saga/effects';
// import axios from 'axios';

// function* searchOthers() {
//     console.log('SEARCH DOGS')
//     let response = yield axios({
//         method: 'GET',
//         url: '/api/dogs'
//     })
//     console.log('response by dogs router', response.data);
//     yield put({
//       type: 'SET_DOGS',
//       payload: response.data
//     })
// }

// function* othersSaga() {
//     yield takeLatest('FETCH_DOGS', searchOthers);
//   }

//   export default othersSaga;