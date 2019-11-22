import React from "react";
import { useRouter } from 'next/router'
import PostPage from '../src/components/PostPage/PostPage'
import { Provider } from "react-redux";
import store from "../src/store"
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;
import 'antd/dist/antd.css'

export default function Post() {


  const router = useRouter()
  const { id }: any = router.query;

  let parsedId: number = parseInt(id, 10);

  console.log("parsedId", parsedId);



  return (

    <div>
      <Provider store={store}>

        <Layout style={{height:'100vh'}}>
          <Header>Header</Header>
          <Content>
            {!Number.isNaN(parsedId) ? (<PostPage id={parsedId} />) : <a>0</a>}
          </Content>
          <Footer>Footer</Footer>
        </Layout>

      </Provider>

    </div>
  );
}