import { call, put, takeLatest, all } from 'redux-saga/effects';
import {
  Actions,
  getDataSuccess,
  getListUserSuccess,
  userLoginSuccess,
} from '../actions';
import TableService from '../../services/table.services';
import { toastSuccess } from '../../Helper/toastHelper';
// worker Saga: will be fired on USER_FETCH_REQUESTED actions

function* fetchAllJD() {
  try {
    const allJd = yield call(TableService.listJob);
    yield put(getDataSuccess(allJd));
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* fetchAllCandidate() {
  try {
    const allCandidate = yield call(TableService.listCandidate);
    yield put({
      type: Actions.GET_DATA_CANDIDATE_SUCCESS,
      payload: allCandidate,
    });
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

// function* postDataJD(action) {
//   try {
//     yield call(TableService.addJob, action.payload);
//     const allJd = yield call(TableService.listJob);
//     yield put(getDataSuccess(allJd));
//   } catch (e) {
//     yield put({ type: 'USER_FETCH_FAILED', message: e.message });
//   }
// }

// function* putDataJD(action) {
//   try {
//     yield call(TableService.editJob, action.payload);
//     const allJd = yield call(TableService.listJob);
//     yield put(getDataSuccess(allJd));
//   } catch (e) {
//     yield put({ type: 'USER_FETCH_FAILED', message: e.message });
//   }
// }

// function* deleteDataJD(action) {
//   try {
//     yield call(TableService.deleteJob, action.payload);
//     const allJd = yield call(TableService.listJob);
//     yield put(getDataSuccess(allJd));
//   } catch (e) {
//     yield put({ type: 'USER_FETCH_FAILED', message: e.message });
//   }
// }

// function* putDataCandidate(action) {
//   try {
//     console.log(action, 'action nè');
//     yield call(TableService.editCandidate, action.payload);

//     const allCandidate = yield call(TableService.listCandidate);
//     yield put({
//       type: Actions.GET_DATA_CANDIDATE_SUCCESS,
//       payload: allCandidate,
//     });
//   } catch (e) {
//     yield put({ type: 'USER_FETCH_FAILED', message: e.message });
//   }
// }

// function* postDataCandidate(action) {
//   try {
//     console.log(action, 'action nè');
//     yield call(TableService.addCandidate, action.payload);

//     const allCandidate = yield call(TableService.listCandidate);
//     yield put({
//       type: Actions.GET_DATA_CANDIDATE_SUCCESS,
//       payload: allCandidate,
//     });
//   } catch (e) {
//     yield put({ type: 'USER_FETCH_FAILED', message: e.message });
//   }
// }

// function* deleteDataCandidate(action) {
//   try {
//     yield call(TableService.deleteCandidate, action.payload);
//     const allCandidate = yield call(TableService.listCandidate);
//     yield put(getDataSuccess(allCandidate));
//   } catch (e) {
//     yield put({ type: 'USER_FETCH_FAILED', message: e.message });
//   }
// }

function* handerLogin(action) {
  try {
    const response = yield call(TableService.login, action.payload);
    // yield put(getDataSuccess(allCandidate));
    if (response.status === 'success') {
      localStorage.setItem('tokens', response.token);
      yield toastSuccess('Đăng nhập thành công');
      yield put(userLoginSuccess(response));
    }
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* fetchListUser(action) {
  try {
    const response = yield call(TableService.listUser, action.payload);
    console.log('response ne ', response.data);

    yield put(getListUserSuccess(response.data));
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* handlerEditUser(action) {
  try {
    console.log(action.payload, 'payyy');
    yield call(TableService.editUser, action.payload);
    const response = yield call(TableService.listUser, action.payload);
    yield put(getListUserSuccess(response.data));
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* handlerAddUser(action) {
  try {
    console.log(action, 'action nè');
    yield call(TableService.addUser, action.payload);
    const response = yield call(TableService.listUser, action.payload);
    yield put(getListUserSuccess(response.data));
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* mySaga() {
  yield takeLatest(Actions.GET_DATA_JD, fetchAllJD);
  yield takeLatest(Actions.GET_DATA_CANDIDATE, fetchAllCandidate);
  yield takeLatest(Actions.USER_LOGIN, handerLogin);
  yield takeLatest(Actions.GET_LIST_USER, fetchListUser);
  yield takeLatest(Actions.ADD_USER, handlerAddUser);
  yield takeLatest(Actions.EDIT_USER, handlerEditUser);
}

export default function* rootSaga() {
  yield all([mySaga()]);
}
