import React from 'react';
import { useRouter } from 'next/router';
import PostPage from '../src/components/PostPage/PostPage';
import { Provider } from 'react-redux';
import store from '../src/store';
import { Layout, Button } from 'antd';
const { Header, Footer, Content } = Layout;
import 'antd/dist/antd.css';
import Router from 'next/router';

export default function Post() {
  const router = useRouter();
  const { id }: any = router.query;

  let parsedId: number = parseInt(id, 10);

  return (
    <div>
      <Provider store={store}>
        <Layout>
          <Header>
            <Button onClick={() => Router.push(`/`)} type="primary">
              Posts
            </Button>
            <Button
              style={{ marginLeft: '15px' }}
              onClick={() => Router.push(`/posts/new`)}
              type="primary"
            >
              Create a post
            </Button>
          </Header>
          <Content style={{ height: '100vh' }}>
            {!Number.isNaN(parsedId) ? <PostPage id={parsedId} /> : <a>0</a>}
          </Content>
          <Footer style={{ display: 'flex', justifyContent: 'center' }}>2019</Footer>
        </Layout>
      </Provider>
    </div>
  );
}
