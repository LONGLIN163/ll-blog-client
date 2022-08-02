import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import {Row,Col,Breadcrumb,Affix} from 'antd'
import {CalendarOutlined,FolderOpenOutlined,EyeOutlined} from "@ant-design/icons"
import Author from '../components/Author'
import Ads from '../components/Ads'
import Footer from '../components/Footer'
import 'markdown-navbar/dist/navbar.css';
import MarkdownNavbar from 'markdown-navbar';
import axios from "axios"

import marked from "marked" // using for parse markdown text
import hljs from "highlight.js"// hight your code here
import 'highlight.js/styles/monokai-sublime.css';

import Tocify from '../components/tocify.tsx'
import  servicePath  from '../config/apiUrl'



 const Detailed=(props)=> {

   const renderer = new marked.Renderer();
   
   // use tocify
   const tocify = new Tocify()
   renderer.heading = function(text, level, raw) {
    const anchor = tocify.add(text, level);
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
  };

  
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
  
  let html = marked(props.article_content);

  return (
    <div>
      <Head>
        <title>BLOG</title>
      </Head>
      <Header /> 
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
        <div>
            <div className="bread-div">
                  <Breadcrumb.Item>
                    <Link href="/"><a>Home</a></Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>{props.typeName}</Breadcrumb.Item>
                  <Breadcrumb.Item>{props.title}</Breadcrumb.Item>
            </div>
            <div>
                <div className="detailed-title">
                    {props.title}
                </div>

                <div className="list-icon center">
                  <span><CalendarOutlined />  {props.addTime}  </span>
                  <span><FolderOpenOutlined />  {props.typeName}  </span>
                  <span><EyeOutlined />  {props.view_count} </span>
                </div>

                <div className="detailed-content" 
                dangerouslySetInnerHTML={{__html:html}}></div>

            </div>
        </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
           <Author />
           <Ads />
           <Affix offsetTop={10}>
              <div className="detailed-nav comm-box">
                <div className="nav-title">Catalog</div>
                <div className="toc-list">
                  {tocify && tocify.render()}
                </div>
                  
              </div>
           </Affix>
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

Detailed.getInitialProps=async(ctx)=>{
  let id=ctx.query.id;
  const promise=new Promise((resolve)=>{
      axios(servicePath.getArticleById+id).then(
          (res)=>{
              resolve(res.data.data[0])
          }
      )
  })
  return await promise;
}

export default Detailed;


