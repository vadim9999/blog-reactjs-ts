import React from "react";
import {connect} from "react-redux";
import {getPosts} from "../../actions"
import Link from 'next/link'
// import axios from "axios"
interface HelloProps {compiler: string;
    framework?: number; 
    getPosts?:any; 
    posts?: any[];}

interface HelloState {name:string}


// export const Hello = (props: HelloProps) => (<h1>Hello from {props.compiler} and {props.framework}  </h1>)

// declare function create(o:object | null): void;

// create({
//     props:0
// })

// type HelloState ={name: string}
const mapStateToProps = (state:any)=>{
    return{
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch:any):object =>{
    
    
    return {
        getPosts: () => dispatch(getPosts())
    }
}

class connectedHello extends React.Component<HelloProps,HelloState> {
    constructor(props:any){
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
    onClick = ()=>{
        this.props.getPosts()
        
        this.setState({
            name: "OKK"
        })
    }
    render(){

        // axios.get('https://simple-blog-api.crew.red/posts').then((response) =>{
        //     console.log(response.data);
            
        // }
            
        // );
        const {posts} = this.props;
        console.log(posts);
        
        return(<h1>
            <ul>
                {posts !=undefined && posts.length >0 ? posts.map((post) =>{
                    return (<li> <Link href={`/post?id=${post.id}`} ><a>{post.title}</a></Link></li>)
                }): "No data"}
            </ul>
            <button onClick = {this.onClick}>Hi</button>
            Hello from {this.props.compiler} and {this.props.framework}  
            </h1>)
    }
}

const Hello  = connect(mapStateToProps, mapDispatchToProps)(connectedHello)

export default Hello