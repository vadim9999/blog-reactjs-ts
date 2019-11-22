import React from "react"
import { addPost } from '../../actions'
import { connect } from 'react-redux'
import Router from 'next/router'
import { Card, Icon, Avatar, Row, Col, Form, Input, Button } from 'antd'

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
        addPost: (post: PostType) => dispatch(addPost(post))
    }
}

const mapStateToProps = (state: any) => {

    return {
        // currentPost: state.currentPost
        createdPostId: state.createdPostId
    }
}

class ConnectedNewPost extends React.Component<NewPostProps, NewPostState>{
    constructor(props: any) {
        super(props)


        this.state = {
            title: "",
            body: "",

        }
    }

    onClick = async () => {
        this.props.addPost({ title: "123", body: "123" })



        console.log("currentPost", this.props.createdPostId);
        // Router.push(`/post?id=${146}`)

    }

    onChange = (e: any) => {
        console.log(e.target.name);
        console.log(e.target.value);

        let value: any = e.target.value
        this.setState({
            [e.target.name]: value
        })

    }
    componentDidUpdate = () => {


    }
    getSnapshotBeforeUpdate = (prevProps: any) => {
        console.log("prev props", prevProps);
        console.log("this.props", this.props);

        console.log("getSnapshot");

        if(prevProps.createdPostId !== this.props.createdPostId){
            const { createdPostId }: any = this.props;
        console.log("curr post", createdPostId);

        // if(currentPost !== undefined && currentPost.id !== undefined){
        let ID: number = createdPostId;

        createdPostId !== undefined && !Number.isNaN(ID) && ID ? Router.push(`/post?id=${ID}`) : null


        }
        
        return null;
    }
    render() {
        // }
        //   const {currentPost}:any = this.props;
        //   console.log("curr post" , currentPost);

        //   // if(currentPost !== undefined && currentPost.id !== undefined){
        //       let ID: number = currentPost.id;

        //       currentPost !== undefined && !Number.isNaN(ID) && ID?   Router.push(`/post?id=${ID}`) : null
        return (
            <Row type="flex" justify="center" >
                <Col >
                    <Form style={{width:'50vh'}}>
                        <Form.Item>
                            <Input name="title" placeholder="Input title of post" allowClear onChange={this.onChange} />

                        </Form.Item>
                        <Form.Item >
                        <TextArea
                            
                            // style={{height: '50vh'}}
                            value={this.state.body} 
                            onChange={this.onChange} 
                            name="body"
                            placeholder="Input text of post"
                            autoSize={{ minRows: 9, maxRows: 15 }}
                            />
                       </Form.Item>
                       <Form.Item>
                       <Button type="primary" htmlType="submit" className="login-form-button">
                            Create post
                        </Button>
                        </Form.Item>
                    </Form>
                    
                
                    
                </Col>
            </Row>
        

        )
    }
}

const NewPost = connect(mapStateToProps, mapDispatchToProps)(ConnectedNewPost)

export default NewPost