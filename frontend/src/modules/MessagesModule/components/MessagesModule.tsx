import React, { useEffect } from 'react'
import { Row, Col, Layout, Badge, Empty } from 'antd'
import style from './messages.module.scss'
import AuthorMessage from '../../../components/Message/AuthorMessage'
import SomeMessage from '../../../components/Message/SomeMessage'
import ChatInput from '../../../components/ChatInput'
import { EllipsisOutlined } from '@ant-design/icons'
import { Route, Redirect } from 'react-router-dom';
import Messages from '../../Messages'
 

type MessagesProps = {
  getMessages?: any,
  messages?: any,
  location: {
    pathname: string
  },
  partner: any,
  dialog: any,
  sendMessage: Function,
  user: any
}

const MessagesModule: React.FC<MessagesProps> = ({dialog, user, sendMessage, partner, getMessages, messages, location}, props:any) => {

const messagesRef: any = React.createRef()
  useEffect(()=> {
    if(messagesRef.current){
      messagesRef.current.scrollTo(0,9999999)
    }
  },[messages])
 
  if(!partner.fullname){
    return <Redirect to='/main_page/dialogs'/>
  }

    return(
        <div >
            <Layout className={style.header_wrapper}>
            <div >
              <div>
              <Row>
                <Col span={23}>
                  <span className={style.chat__sidebar_header} style={{marginLeft: "5px"}}>
                    {
                      partner.isOnline
                      ? <Badge  dot color='green' offset={[partner.fullname.length,12]}>{partner.fullname}</Badge>  
                      : <>{partner.fullname}</>
                    }
                    
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
             (location.pathname.slice(19).length !== 0 && location.pathname.length == 43 && location.pathname.slice(19,22) == '5ec')
              ? //<Route  path={props.location.pathname} render = { () => 
                <div  ref={messagesRef} className={style.dialogs_items} style={{marginTop: "15px"}}>
                  <Messages dialog={dialog} partner={partner} messagesItems={messages} user={user} getMessages={getMessages} dialogId={location.pathname.slice(19)}/>
                </div>
                //}/>
              : <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh'}}>
                <Empty description='Choose the dialog'/>
              </div>
            }
            </Layout>
            <Layout>
              <ChatInput dialogId={location.pathname.slice(19)} sendMessage={sendMessage}/>
            </Layout>
        </div>
    )
}

export default MessagesModule