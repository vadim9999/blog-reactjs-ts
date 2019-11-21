import React from "react";
import {useRouter} from 'next/router'
import PostPage from '../src/components/PostPage/PostPage'
import {Provider} from "react-redux";
import store from "../src/store"
export default function Post() {

    
    const router = useRouter()
    const {id}:any = router.query;

    let parsedId:number = parseInt(id,10);

    console.log("parsedId",parsedId);
    
   
    
    return (
     
      <div>
          <Provider store={store}>
              {!Number.isNaN(parsedId)? (<PostPage id={parsedId} />):<a>0</a>}
            
            <p>This is the about page {id}</p>
          </Provider>
          
      </div>
    );
  }