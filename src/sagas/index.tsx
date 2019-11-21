import {takeEvery, put, call} from "redux-saga/effects"
import axios from "axios"
const URL = "https://simple-blog-api.crew.red/"
export default function* watcherSaga(){
    yield takeEvery("GET_POSTS", getPostsWorker)
    yield takeEvery("GET_POST_BY_ID",getPostByIdWorker)
}

function* getPostByIdWorker(action:{type:string,payload: number}){
    
    
    try{
        const result:any = yield call(getPostById,action.payload)

        yield put({type:`${action.type}_SUCCESS`, payload:result.data})
    }catch(e){
        yield put({type:`${action.type}_FAIL`})
    }
}

const getPostById = (id:number):any =>{
    return axios.get(`${URL}posts/${id}`,{
        params:{
            '_embed':'comments'
        }
    })
}

function* getPostsWorker(){
    try{
        const result:any = yield call(getPosts)
        yield console.log(result);
        
        yield put({type: "GET_POSTS_SUCCESS", payload: result.data})
    }catch(e){

    }
}

const getPosts = ():any => {
    console.log("getPosts", );
    return axios.get(URL + 'posts')
        
    // console.log(data);
    
    // return axios.get('https://simple-blog-api.crew.red/posts')

    
}