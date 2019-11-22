import React from 'react';
import { addPost } from '../../actions';
import { connect } from 'react-redux';
import Router from 'next/router';
import { Row, Col, Form, Input, Button } from 'antd';

const { TextArea } = Input;

interface NewPostState {
  title?: string;
  body?: string;
}
interface NewPostProps {
  addPost?: any;
  createdPostId?: number;
}

interface PostType {
  title: string;
  body: string;
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    addPost: (post: PostType) => dispatch(addPost(post)),
  };
};

const mapStateToProps = (state: any) => {
  return {
    createdPostId: state.createdPostId,
  };
};

class ConnectedNewPost extends React.Component<NewPostProps, NewPostState> {
  constructor(props: any) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };
  }

  onClick = () => {
    const { title, body } = this.state;

    this.props.addPost({ title, body });
  };

  onChange = (e: any) => {
    let value: any = e.target.value;
    this.setState({
      [e.target.name]: value,
    });
  };
  componentDidUpdate = () => {};
  getSnapshotBeforeUpdate = (prevProps: any) => {
    if (prevProps.createdPostId !== this.props.createdPostId) {
      const { createdPostId }: any = this.props;

      let ID: number = createdPostId;

      createdPostId !== undefined && !Number.isNaN(ID) && ID ? Router.push(`/post?id=${ID}`) : null;
    }

    return null;
  };
  render() {
    return (
      <Row type="flex" justify="center">
        <Col>
          <Form style={{ width: '50vh' }}>
            <Form.Item>
              <Input
                name="title"
                placeholder="Input title of post"
                allowClear
                onChange={this.onChange}
              />
            </Form.Item>
            <Form.Item>
              <TextArea
                value={this.state.body}
                onChange={this.onChange}
                name="body"
                placeholder="Input text of post"
                autoSize={{ minRows: 9, maxRows: 15 }}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" onClick={this.onClick} className="login-form-button">
                Create post
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}

const NewPost = connect(mapStateToProps, mapDispatchToProps)(ConnectedNewPost);

export default NewPost;
