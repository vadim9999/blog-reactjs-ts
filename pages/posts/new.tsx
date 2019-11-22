import React from "react";

// import Posts from '../src/components/Posts/Posts'
import { Provider } from "react-redux";
import store from "../../src/store"
import Router from 'next/router'
import NewPost from "../../src/components/NewPost/NewPost"
import 'antd/dist/antd.css'
import { Layout, Button } from 'antd';

const { Header, Footer, Content } = Layout;


function Home() {

    return (

        <div style={{height:'100vh'}}>

        
            <Provider store={store}>
                <Layout style={{height:'100vh'}}>
                    <Header>
                        <Button onClick={()=>Router.push(`/`)} type="primary">Posts</Button>
                       
                    </Header>
                    <Content style={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}} >
                     <NewPost />
                    </Content>
                    <Footer style={{display:'flex', justifyContent:'center'}}>2019</Footer>
                </Layout>
                
               
            </Provider>


            </div>
    )
}

export default Home