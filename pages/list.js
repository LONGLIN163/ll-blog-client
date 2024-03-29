import Head from 'next/head'
import Header from '../components/Header'
import {Row,Col,List,Breadcrumb } from 'antd'
import { useEffect, useState } from 'react'
import {CalendarOutlined,FolderOpenOutlined,FireOutlined} from "@ant-design/icons"
import Author from '../components/Author'
import Ads from '../components/Ads'
import Footer from '../components/Footer'
import Link from 'next/link'
import axios from "axios"
import  servicePath  from '../config/apiUrl'

import marked from "marked" // using for parse markdown text

import hljs from "highlight.js"// hight your code here
import 'highlight.js/styles/monokai-sublime.css';

 const MyList=(results)=> {

  const [list,setMyList]=useState(results.data)

 // after switch page, set new state
 useEffect(() => {
   setMyList(results.data) 
 },[results.data, setMyList]) 

 // set up markdonw config
 const renderer = new marked.Renderer();
 marked.setOptions({
  renderer: renderer, 
  gfm: true,
  pedantic: false,
  sanitize: false,
  tables: true,
  breaks: false,
  smartLists: true,
  smartypants: false,
  highlight: (code) => {
    return hljs.highlightAuto(code).value;
  }
}); 

  return (
    <div>
      <Head>
        <title>BLOG</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header /> 
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
          <div>
          <Breadcrumb>
              <Breadcrumb.Item>
                <Link href="/"><a >Home</a></Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>{results.data[0].typeName ? results.data[0].typeName : "other"}</Breadcrumb.Item>
          </Breadcrumb>
          </div>
          <List 
            itemLayout="vertical"
            dataSource={list}
            renderItem={item => (
              <List.Item>
                <div className="list-title">
                    <Link href={{
                          pathname:"/detailed",
                          query:{
                            id:item.id
                          }
                        }}><a>{item.title}</a>
                    </Link>
                </div>
                <div className="list-icon">
                    <span><CalendarOutlined />  {item.addTime}  </span>
                    <span><FolderOpenOutlined />  {item.typeName}  </span>
                    <span><FireOutlined />   {item.view_count} </span>
                </div>
                <div className="list-context" 
                dangerouslySetInnerHTML={{__html:marked(item.introduce)}}
                >
                </div>
              </List.Item>
            )}
          />
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Ads />
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

MyList.getInitialProps=async(ctx)=>{ // pass a context from last router(this page url)
  let id=ctx.query.id;
  const promise=new Promise((resolve)=>{
      axios(servicePath.getListById+id).then(
          (res)=>{
            resolve(res.data)
          }
      )  
  })
  return await promise;
}

export default MyList;

