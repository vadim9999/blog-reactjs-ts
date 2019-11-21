import React from "react";

import Hello from '../src/components/Hello'
import {Provider} from "react-redux";
import store from "../src/store"


function my() :void{
  console.log("hi");
  
}

function Home() {
  my()
    return (

    <div>
      <Provider store={store}>
      <Hello compiler="Hey"/>
      </Provider>
      
      
      </div>
    )
  }
  
  export default Home