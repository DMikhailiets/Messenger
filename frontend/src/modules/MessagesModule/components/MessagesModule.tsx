import React, { useEffect } from 'react'
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
  dialogId: string,
  location: {
    pathname: string
  }
}

const MessagesModule: React.FC<MessagesProps> = ({dialogId, getMessages, messages, location}, props:any) => {
const messagesRef: any = React.createRef()
 console.log(messages)
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
                <EllipsisOutlined rotate={90} style={{fontSize: '15px'}}/>
                </Col>
              </Row>
               
              </div>
              
            </div>
            </Layout>
            <Layout  className={style.messages_wrapper}>
            { 
             (location.pathname.slice(19) !== '')
              ? //<Route  path={props.location.pathname} render = { () => 
              <div  ref={messagesRef} className={style.dialogs_items} style={{marginTop: "15px"}}>
                  <Messages messagesItems={messages} getMessages={getMessages} dialogId={location.pathname.slice(19)}/>
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