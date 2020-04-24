import React from 'react'
import { Row, Col, Layout, Input, Form, Button } from 'antd'
import { Block } from '../../../components'
import style from './messages.module.scss'
import { NavLink } from 'react-router-dom'
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import AuthorMessage from '../../../components/Message/AuthorMessage'
import SomeMessage from '../../../components/Message/SomeMessage'
import ChatInput from '../../../components/ChatInput'
export const Messages = (props:any) => {
    return(
        <div >
            <Layout className={style.header_wrapper}>
            <div className={style.chat__sidebar_header}>
              <div>
                <span className={style.message_title} style={{marginLeft: "5px"}}>Dubonoss</span>
              </div>
              
            </div>
            </Layout>
            <Layout className={style.messages_wrapper}>
              <AuthorMessage/>
              {/* <SomeMessage/>
              <SomeMessage/> */}
              <SomeMessage/>
              <AuthorMessage/>
              
            </Layout>
            <Layout>
            <ChatInput/>
            </Layout>
        </div>
    )
}

export default Messages