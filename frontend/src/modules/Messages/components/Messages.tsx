import React from 'react'
import { Row, Col, Layout, Badge, Empty } from 'antd'
import style from './messages.module.scss'
import AuthorMessage from '../../../components/Message/AuthorMessage'
import SomeMessage from '../../../components/Message/SomeMessage'
import ChatInput from '../../../components/ChatInput'
import { EllipsisOutlined } from '@ant-design/icons'

export const Messages = (props:any) => {
    return(
        <div >
            <Layout className={style.header_wrapper}>
            <div >
              <div>
              <Row>
                <Col span={23}>
                  
                  <span className={style.chat__sidebar_header} style={{marginLeft: "5px"}}>
                  <Badge  dot color='green' offset={[-75,12]}>Dubonoss</Badge>  
                  </span>
                </Col>
                <Col span={1}>
                <EllipsisOutlined style={{fontSize: '15px'}}/>
                </Col>
              </Row>
               
              </div>
              
            </div>
            </Layout>
            <Layout className={style.messages_wrapper}>
            {
              false
              ? <div className={style.dialogs_items} style={{marginTop: "15px"}}>
                  <AuthorMessage/>
                  {/* <SomeMessage/>
                  <SomeMessage/> */}
                  <SomeMessage/>
                  <AuthorMessage/>
                  <SomeMessage/>
                  <AuthorMessage/>
                  <SomeMessage/>
                  <AuthorMessage/>
                  <SomeMessage/>
                  <AuthorMessage/>
                  <SomeMessage/>
                  <AuthorMessage/>
                  <SomeMessage/>
                  <AuthorMessage/>
                  <SomeMessage/>
                  <AuthorMessage/>
                  <SomeMessage/>
                  <AuthorMessage/>
                </div>
              : <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh'}}>
                <Empty description='Choose the dialog'/>
              </div>
            }
            </Layout>
            <Layout>
            <ChatInput/>
            </Layout>
        </div>
    )
}

export default Messages