import React from "react";

import Posts from '../src/components/Posts/Posts'
import { Provider } from "react-redux";
import store from "../src/store"
// import Link from 'next/link'
import 'antd/dist/antd.css'
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

function my(): void {
  console.log("hi");

}

function Home() {
  my()
  return (

    <div>
      <Provider store={store}>
        <Layout>
          <Header>Header</Header>
          <Content>
            <Posts compiler="Hey" />
          </Content>
          <Footer>Footer</Footer>
        </Layout>

        {/* <Link href="/post?slug=133" >go to post 2</Link> */}
      </Provider>


    </div>
  )
}

export default Home