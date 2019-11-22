import React from "react";

// import Posts from '../src/components/Posts/Posts'
import { Provider } from "react-redux";
import store from "../../src/store"
import Link from 'next/link'
import NewPost from "../../src/components/NewPost/NewPost"

function my(): void {
    console.log("hi");

}

function Home() {
    my()
    return (

        <div>
            <Provider store={store}>
                {/* <Posts compiler="Hey"/> */}
                <NewPost />
                <Link href="/post?slug=133" >go to post 2</Link>
            </Provider>


        </div>
    )
}

export default Home