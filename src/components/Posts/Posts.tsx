import React from "react";
import { connect } from "react-redux";
import { getPosts } from "../../actions"
import Link from 'next/link'
import { Card, Icon, Avatar, Row, Col } from 'antd'
import Router from "next/router"

const { Meta } = Card;

// import NewPost from "../NewPost/NewPost"
// import axios from "axios"
interface PostsProps {

    framework?: number;
    getPosts?: any;
    posts?: any[];
}

interface PostsState { name: string }


// export const Hello = (props: HelloProps) => (<h1>Hello from {props.compiler} and {props.framework}  </h1>)

// declare function create(o:object | null): void;

// create({
//     props:0
// })

// type HelloState ={name: string}
const mapStateToProps = (state: any) => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch: any): object => {


    return {
        getPosts: () => dispatch(getPosts())
    }
}

class connectedPosts extends React.Component<PostsProps, PostsState> {
    constructor(props: any) {
        super(props)

        this.state = {
            name: "Drake"
        }

    }



    // error(message: string): never{

    //     throw new Error(message)
    // }

    // fail(){
    //     return this.error("Some")
    // }

    // onClick(){
    //     console.log("click");
    //     console.log(this.state.name);
    //     this.props.getPosts()
    //     this.setState({
    //         name: "OKK"
    //     })

    // }
    // using arrow functions you don't need to bind function to this class 
    componentDidMount = () => {
        this.props.getPosts()
    }

    onClick = (e:any) => {

        
        

    }
    render() {

        // axios.get('https://simple-blog-api.crew.red/posts').then((response) =>{
        //     console.log(response.data);

        // }

        // );
        const { posts } = this.props;
        

        return (<div>
            <Row type="flex" justify="center">
                <Col>
                
            
                {posts != undefined && posts.length > 0 ? posts.map((post) => {

                    return (
                        <Row>
                            <Col>
                            <Card
                style={{ width: '50vh', marginTop: 16 }}
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }
                actions={[
                    // <Icon type="setting" key="setting" />,
                    // <Icon type="edit" key="edit" />,
                   (<Icon title="Load more" onClick={()=>{Router.push(`/post?id=${post.id}`)}} type="ellipsis" key={post.id} />),
                ]}
            >
                <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={post.title}
                    description={post.body}
                />
            </Card>
                            </Col>
                        </Row>
                    )

                }) : "No data"}
                </Col>
            </Row>
        </div>)
    }
}

const Post = connect(mapStateToProps, mapDispatchToProps)(connectedPosts)

export default Post

 // <li> <Link href={`/post?id=${post.id}`} ><a>{post.title}</a></Link></li>)