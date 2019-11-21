
const initialState = {
    posts: [],
}

const rootReducer = (state :object = initialState, action:any) :object =>{
    if(action === "GET_POSTS"){
        return {
            ...state,
            posts: [...action.payload]
        }

        
    }
    return state;
}

export default rootReducer;