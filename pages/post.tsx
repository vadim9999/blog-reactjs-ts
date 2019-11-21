import React from "react";
import {useRouter} from 'next/router'

export default function Post() {

    
    const router = useRouter()
    const {id} = router.query
    console.log(id);
    
    return (
     
      <div>
        <p>This is the about page {id}</p>
      </div>
    );
  }