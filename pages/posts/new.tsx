import React from "react";

// import Posts from '../src/components/Posts/Posts'
import { Provider } from "react-redux";
import store from "../../src/store"
import Link from 'next/link'
import NewPost from "../../src/components/NewPost/NewPost"
import 'antd/dist/antd.css'
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;


function Home() {

    return (

        
            <Provider store={store}>
                {/* <Posts compiler="Hey"/> */}
                <Layout style={{height:'100vh'}}>
                    <Header>Header</Header>
                    <Content style={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}} >
                     <NewPost />
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
                
               
            </Provider>


        
    )
}

export default Home