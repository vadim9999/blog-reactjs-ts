import React from "react";
import {connect} from "react-redux";
import {getPosts} from "../actions"

interface HelloProps {compiler: string; framework?: number; getPosts?:any;}
interface HelloState {name:string}

// export const Hello = (props: HelloProps) => (<h1>Hello from {props.compiler} and {props.framework}  </h1>)

// declare function create(o:object | null): void;

// create({
//     props:0
// })

// type HelloState ={name: string}
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

        this.onClick = this.onClick.bind(this)
    }

    getName = ()  : number | string =>{

        return "443f"
        
    }

    error(message: string): never{
        
        throw new Error(message)
    }

    fail(){
        return this.error("Some")
    }

    onClick(){
        console.log("click");
        console.log(this.state.name);
        this.props.getPosts()
        this.setState({
            name: "OKK"
        })
        
    }
    // using arrow functions I 
    // onClick = ()=>{
    //     console.log("click");
    //     console.log(this);
    //     this.setState({
    //         name: "OKK"
    //     })
    // }
    render(){
        // let list: Array<number> = [3,4,""];

        
        
        
        enum Color {Red, Green, Blue}
        let c :Color = Color.Green;
        console.log(c);
        
        let arr: string[] = [];
        console.log(arr);
        
        let arr1: Array<number|string> = [33, "ff"]
        console.log(arr1);
        
        let second : [string, number] = ['',22];
        
        console.log(second);
        
        let list : number[] = [2,3,4,]
        console.log(list);
        
        return(<h1>
            <button onClick = {this.onClick}>Hi</button>
            Hello from {this.props.compiler} and {this.props.framework}  
            </h1>)
    }
}

const Hello  = connect(null, mapDispatchToProps)(connectedHello)

export default Hello