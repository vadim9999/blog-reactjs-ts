import React from "react"
import {addPost} from '../../actions'
import {connect} from 'react-redux'
import Router from 'next/router'

interface NewPostState {
    title?: string;
    body?: string;
    
}
interface NewPostProps {
    addPost?: any;
    createdPostId?:number;
}

interface PostType {
    title:string;
    body:string;
}

const mapDispatchToProps = (dispatch:any) =>{
    return{
        addPost: (post:PostType) => dispatch(addPost(post))
    }
}

const mapStateToProps = (state:any) =>{

    return{
        // currentPost: state.currentPost
        createdPostId: state.createdPostId
    }
}

class ConnectedNewPost extends React.Component<NewPostProps,NewPostState>{
    constructor(props:any){
        super(props)


        this.state = {
            title: "",
            body: "",

        }
    }

    onClick = async ()  =>{
        this.props.addPost({title:"123", body:"123"})

        
       
        console.log("currentPost", this.props.createdPostId);
        // Router.push(`/post?id=${146}`)
        
    } 
    
    onChange = (e:any) =>{
        console.log(e.target.name);
        console.log(e.target.value);
        
        let value: any = e.target.value
        this.setState({
            [e.target.name]:  value
        })
        
    }
    componentDidUpdate = () =>{
       
            
    }
    getSnapshotBeforeUpdate= (prevProps:any) =>{
        console.log("prev props" ,prevProps);
        console.log("this.props", this.props);
        
        console.log("getSnapshot");
        
        
            const {createdPostId}:any = this.props;
              console.log("curr post" , createdPostId);
              
              // if(currentPost !== undefined && currentPost.id !== undefined){
                  let ID: number = createdPostId;
      
                  createdPostId !== undefined && !Number.isNaN(ID) && ID?   Router.push(`/post?id=${ID}`) : null
        
           
        return null;
    }
    render(){
              // }
            //   const {currentPost}:any = this.props;
            //   console.log("curr post" , currentPost);
              
            //   // if(currentPost !== undefined && currentPost.id !== undefined){
            //       let ID: number = currentPost.id;
      
            //       currentPost !== undefined && !Number.isNaN(ID) && ID?   Router.push(`/post?id=${ID}`) : null
        return (<div>
            NewPost
            <input value={this.state.title} onChange={this.onChange} name="title" ></input>
            <input value={this.state.body} onChange={this.onChange} name="body"></input>
            <button onClick={this.onClick}>ADD post</button>
        </div>)
    }
}

const NewPost = connect(mapStateToProps, mapDispatchToProps)(ConnectedNewPost)

export default NewPost