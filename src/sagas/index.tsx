import {takeEvery, put, call} from "redux-saga/effects"

export default function* watcherSaga(){
    yield takeEvery("GET_POSTS", getPostsWorker)
}

function* getPostsWorker(){
    try{
        const data = yield call(getTasks,"ff")
    
        yield put({type: "GET_POSTS_SUCCESS", payload:data})
    }catch(e){

    }
}

const getTasks = (payload:string):string[] => {

    return ["first posts", payload]
}