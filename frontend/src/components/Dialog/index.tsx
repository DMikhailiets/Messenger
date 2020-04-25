import React from 'react'
import style from './dialog.module.scss'
import { Col, Row, Layout, Badge } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import {  Avatar } from '../../components';
import format from "date-fns/format";
import { isToday } from 'date-fns';

 type DialogProps = {
    _id: string,
    text: string,
    created_at: string,
    user: {
      _id: string,
      fullname: string,
      avatar: null | any,
     }
}

const getMessageTime = (created_at: string ) => {
    let date = new Date(created_at)
    if (isToday(date)) {
      return format(date, "HH:mm");
    } else {
      return format(date, "dd.MM.yyyy");
    }
  };


const Dialogs: React.FC<DialogProps> = ({text, created_at, _id, user}) => {
    console.log(text.length)
    console.log(text)

    return (
        <div>
            <Row>
     
      <Col span={24}>
        <div className={style.message_wrapper}>
            <Avatar isOnline/>
            <Layout className={style.text_content}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div className={style.author_title}>{user.fullname}</div>
                <div className={style.date_title}>{getMessageTime(created_at)}</div>
            </div>
            <div className={style.message}> 
                {(text.length > 40)
                ? (text.slice(0, 40) + ' ...')
                : (text)
            }  
            </div>
            </Layout>
        </div>
        </Col>
        </Row>
        </div>
    )
}

export default Dialogs