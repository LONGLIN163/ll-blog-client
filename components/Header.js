import { Row,Col,Menu,Input } from "antd"
import * as Icon from '@ant-design/icons';
import React,{ useState,useEffect } from "react";
import Router from "next/router"
import axios from "axios";
import  servicePath  from '../config/apiUrl'

const { Search } = Input;

const Header = (props) => {

   const [navArr,setNavArr]=useState([]);

   useEffect(() => { 
      const fetchData=async ()=>{
         try {
            console.log(1)
            console.log(servicePath.getTypeInfo)
            const data=await axios(servicePath.getTypeInfo,{
               header:{ 'Access-Control-Allow-Origin':'*' }
            }).then(
                  (res)=>{
                     console.log(3)
                     console.log(res.data.data)
                     return res.data.data
                  }
            )
            setNavArr(data)
         } catch (error) {
            console.log(error);
            // Do something with error
         }
      }
      fetchData()
   },[])


   const handleClick=(e)=>{
      if(e.key==0 || undefined){
         Router.push("/")
      }else{
         Router.push("/list?id="+e.key)
      }
   }

   const searchArticle = (e) => {
      let searkey=e.target.value;
      let resArr = []
      props.list.filter((item) =>{
         if(item.title.toLowerCase() . includes(searkey.toLowerCase())) resArr.push(item)   
      });
      props.setSelfList(resArr)
   }

    return ( 
        <div className="header">
            <Row type="flex" justify="center">
                <Col xs={21} sm={20} md={10} lg={18} xl={12}>
                  <span className="header-logo" onClick={()=>{
                      Router.push("/")
                   }}>Blog_L2</span>
                  <span className="header-txt">
                     <Search 
                        placeholder="search..." 
                        style={{ width: 250 }} 
                        onChange={searchArticle}
                     />
                  </span>
                </Col>

                <Col xs={3} sm={4} md={14} lg={5} xl={6}>
                   <Menu mode="horizontal" onClick={handleClick}>
                      <Menu.Item key="0">
                        <Icon.HomeOutlined /> Home
                      </Menu.Item>
                      {
                         navArr.map((item,index)=>{
                            const icon = React.createElement(
                              Icon[item.icon],
                              {
                                style:{ fontSize: '16px'}
                              }
                            )
                            return (
                            <Menu.Item key={item.Id} icon={icon}>
                               {item.typeName}
                            </Menu.Item>)
                         })
                      }
                   </Menu>
                </Col>
            </Row>
        </div>
     );
}
export default Header;
