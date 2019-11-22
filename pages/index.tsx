import React from "react";

import Posts from '../src/components/Posts/Posts'
import { Provider } from "react-redux";
import store from "../src/store"
// import Link from 'next/link'
import 'antd/dist/antd.css'
import { Layout, Button } from 'antd';
import Router from 'next/router'
const { Header, Footer, Content } = Layout;


function my(): void {
  console.log("hi");

}

function Home() {
  my()
  return (

    <div style={{height:'100vh'}}>
      <Provider store={store}>
        <Layout>
          <Header>
            <Button onClick={()=>Router.push(`/posts/new`)} type="primary">Create a post</Button>
          </Header>
          <Content>
            <Posts  />
          </Content>
          <Footer style={{display:'flex', justifyContent:'center'}}>2019</Footer>
        </Layout>

        {/* <Link href="/post?slug=133" >go to post 2</Link> */}
      </Provider>


    </div>
  )
}

export default Home