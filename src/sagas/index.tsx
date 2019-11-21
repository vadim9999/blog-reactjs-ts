import {takeEvery, put, call} from "redux-saga/effects"
import axios from "axios"

export default function* watcherSaga(){
    yield takeEvery("GET_POSTS", getPostsWorker)
}

function* getPostsWorker(){
    try{
        const result = yield call(getPosts)
        yield console.log(result);
        
        yield put({type: "GET_POSTS_SUCCESS", payload: result.data})
    }catch(e){

    }
}

const getPosts = ():any => {
    console.log("getPosts", );
    return axios.get('https://simple-blog-api.crew.red/posts')
        
    // console.log(data);
    
    // return axios.get('https://simple-blog-api.crew.red/posts')

    
}