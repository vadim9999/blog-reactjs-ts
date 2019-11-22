import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';
const URL = 'https://simple-blog-api.crew.red';

export default function* watcherSaga() {
  yield takeEvery('GET_POSTS', getPostsWorker);
  yield takeEvery('GET_POST_BY_ID', getPostByIdWorker);
  yield takeEvery('ADD_POST', addPostWorker);
}

function* addPostWorker(action: { type: string; payload: { title: string; body: string } }) {
  try {
    const result: any = yield call(addPost, action.payload);
    yield put({ type: `${action.type}_SUCCESS`, payload: result.data.id });
  } catch (e) {
    yield put({ type: `${action.type}_FAIL` });
  }
}

const addPost = (post: { title: string; body: string }) => {
  return axios.post(`${URL}/posts`, {
    ...post,
  });
};

function* getPostByIdWorker(action: { type: string; payload: number }) {
  try {
    const result: any = yield call(getPostById, action.payload);

    yield put({ type: `${action.type}_SUCCESS`, payload: result.data });
  } catch (e) {
    yield put({ type: `${action.type}_FAIL` });
  }
}

const getPostById = (id: number): any => {
  return axios.get(`${URL}/posts/${id}`, {
    params: {
      _embed: 'comments',
    },
  });
};

function* getPostsWorker() {
  try {
    const result: any = yield call(getPosts);
    yield put({ type: 'GET_POSTS_SUCCESS', payload: result.data });
  } catch (e) {}
}

const getPosts = (): any => {
  return axios.get(URL + '/posts');
};
