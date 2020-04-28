import React, { useEffect, useRef } from 'react'
import { Row, Col, Layout, Badge, Empty } from 'antd'
import style from './messages.module.scss'
import AuthorMessage from '../../../components/Message/AuthorMessage'
import SomeMessage from '../../../components/Message/SomeMessage'
import ChatInput from '../../../components/ChatInput'
import { EllipsisOutlined } from '@ant-design/icons'
import { Route } from 'react-router-dom';
import Messages from '../../Messages'
 

type MessagesProps = {
  getMessages?: any,
  messages?: any,
  dialogId: string
}

const MessagesModule: React.FC<MessagesProps> = ({dialogId, getMessages, messages}, props:any) => {
const messagesRef: any = React.createRef()
 
  useEffect(()=> {
    if(messagesRef.current){
      messagesRef.current.scrollTo(0,9999999)
    }
  },[messages])
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
            <Layout  className={style.messages_wrapper}>
            {
              
             (dialogId )
              ? //<Route  path={props.location.pathname} render = { () => 
              <div  ref={messagesRef} className={style.dialogs_items} style={{marginTop: "15px"}}>
                  <Messages messagesItems={messages} getMessages={getMessages} dialogId={dialogId}/>
                </div>
                //}/>
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

export default MessagesModule