export const getPosts = (): {type:string} =>{
    return {
        type: 'GET_POSTS'
    }
}

export const getPostById = (payload:number) : {type:string, payload:number} =>{
    return {
        type: 'GET_POST_BY_ID',
        payload
    }
} 

export const addPost = (payload:{title:string, body:string}) =>{
    return {
        type: "ADD_POST",
        payload
    }
}