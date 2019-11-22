import React from "react"
import { connect } from "react-redux"
import { getPostById } from "../../actions/"
import { Card, Icon, Avatar, Row, Col, Comment, Tooltip, List } from 'antd'
const { Meta } = Card;

interface PostProps {
    id: number;
    currentPost: { id: number, title: string, body: string, comments: object };
    getPostById: any;
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getPostById: (id: number) => dispatch(getPostById(id))
    }
}

const mapStateToProps = (state: any): { currentPost: object } => {
    return {
        currentPost: state.currentPost
    }
}

class ConnectedPost extends React.Component<PostProps, {}>{
    constructor(props: any) {
        super(props)

    }
    componentDidMount = () => {
        const { id } = this.props;
        console.log(this.props.id, typeof this.props.id);
        if (!Number.isNaN(id)) {
            console.log("RUNN");

            this.props.getPostById(this.props.id)
        }



    }

    getDataForComments = () =>{
        const {currentPost}:any = this.props;
        if(currentPost!== undefined && currentPost.body !== undefined){
            console.log("dispaly comments");
            
            return currentPost.comments.map((comment:{body:string})=>{
                return{
                    author:"Anonim",
                    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                    content:(
                        <p>
                            {comment.body}
                        </p>
                    )
                }
            })
        }else {
            return[{
                // author:"Anonim",
                // avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                // content:(
                //     <p>
                //         {"Comment"}
                //     </p>
                // )
            }]
        }
       
    }

    render() {

        const { currentPost } = this.props;

        let comments:any = currentPost.comments
        
        console.log("Current post", this.props.currentPost);

        return (


            <Row type="flex" justify="center">
                <Col>
                    <Card
                        style={{ width: '80vh', marginTop: 16 }}
                        cover={
                            <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                        }
                        actions={[
                            // <Icon type="setting" key="setting" />,
                            // <Icon type="edit" key="edit" />,
                            //    (<Icon title="Load more" onClick={()=>{Router.push(`/post?id=${post.id}`)}} type="ellipsis" key={post.id} />),
                        ]}
                    >
                        <Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={currentPost.title}
                            description={currentPost.body}
                        />
                    </Card>

                    <List
                        className="comment-list"
                        header={`${comments !== undefined && comments.length !== undefined ?comments.length:0} replies`}
                        itemLayout="horizontal"
                        dataSource={ this.getDataForComments()}
                        renderItem={(item:{author:string, avatar:string, content:string}) => (
                            <li>
                                <Comment
                                    // actions={item.actions}
                                    author={item.author}
                                    avatar={item.avatar}
                                    content={item.content}
                                    // datetime={item.datetime}
                                />
                            </li>
                        )}
                    />
                </Col>
            </Row>






        )
    }
}

const PostPage = connect(mapStateToProps, mapDispatchToProps)(ConnectedPost)

export default PostPage

// 
{/* <a>Hi{this.props.id}
<h1>{currentPost.body}</h1>
</a> */}