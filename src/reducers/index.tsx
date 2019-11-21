
const initialState = {
    posts: [],
}

const rootReducer = (state :object = initialState, action:any) :object =>{
    if(action.type === "GET_POSTS_SUCCESS"){
        console.log("GETPostssuccess", action);
        
        return {
            ...state,
            posts: [...action.payload]
        }

        
    }
    return state;
}

export default rootReducer;