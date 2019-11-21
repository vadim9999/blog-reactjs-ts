import React from "react"
import {connect} from "react-redux"
import {getPostById} from "../../actions/"

interface PostProps {
    id: number;
    currentPost: {id: number, title:string,body:string, comments:object};
    getPostById: any;
}

const mapDispatchToProps = (dispatch:any) =>{
    return{
        getPostById: (id:number) => dispatch(getPostById(id))
    }
}

const mapStateToProps = (state:any): {currentPost: object}=>{
    return{
        currentPost: state.currentPost
    }
}

class ConnectedPost extends React.Component<PostProps,{}>{
    constructor(props:any){
        super(props)

    }
    componentDidMount = () =>{
        const { id} = this.props;
        console.log(this.props.id,typeof this.props.id);
        if(!Number.isNaN(id)){
            console.log("RUNN");
            
            this.props.getPostById(this.props.id)
        }
        
        
        
    }

    render(){
        
        const { currentPost} = this.props;
        

        console.log("Current post",this.props.currentPost);
        
        return(<a>Hi{this.props.id}
        <h1>{currentPost.body}</h1>
        </a>)
    }
}

const PostPage = connect(mapStateToProps,mapDispatchToProps)(ConnectedPost)

export default PostPage