import React from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../../actions';

import { Card, Icon, Avatar, Row, Col } from 'antd';
import Router from 'next/router';

const { Meta } = Card;

interface PostsProps {
  framework?: number;
  getPosts?: any;
  posts?: any[];
}

interface PostsState {
  name: string;
}

const mapStateToProps = (state: any) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch: any): object => {
  return {
    getPosts: () => dispatch(getPosts()),
  };
};

class connectedPosts extends React.Component<PostsProps, PostsState> {
  constructor(props: any) {
    super(props);

    this.state = {
      name: 'Drake',
    };
  }

  componentDidMount = () => {
    this.props.getPosts();
  };

  render() {
    const { posts } = this.props;

    return (
      <div>
        <Row type="flex" justify="center">
          <Col>
            {posts != undefined && posts.length > 0
              ? posts.map(post => {
                  return (
                    <Row>
                      <Col>
                        <Card
                          key={post.id}
                          style={{ width: '50vh', marginTop: 16 }}
                          cover={
                            <img
                              alt="example"
                              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                          }
                          actions={[
                            <Icon
                              title="Load more"
                              onClick={() => {
                                Router.push(`/post?id=${post.id}`);
                              }}
                              type="ellipsis"
                              key={post.id}
                            />,
                          ]}
                        >
                          <Meta
                            avatar={
                              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            }
                            title={post.title}
                            description={post.body}
                          />
                        </Card>
                      </Col>
                    </Row>
                  );
                })
              : 'No data'}
          </Col>
        </Row>
      </div>
    );
  }
}

const Post = connect(mapStateToProps, mapDispatchToProps)(connectedPosts);

export default Post;
