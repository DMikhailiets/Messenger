import React from 'react';
import style from './author_message.module.scss';
import { Comment, Tooltip, Layout, Row, Col } from 'antd';
import moment from 'moment';
import classNames from "classnames";
import Avatar from '../../Avatar';
import { Popover, Button } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons'

type MessageProps = {
    _id: string,
    text: string,
    createdAt: string,
    user: {
      _id: string,
      fullname: string,
      avatar: null | any,
     }
}

const content = (
  <div>
    <Button>Delete message</Button>
  </div>
)

const AuthorMessage: React.FC<MessageProps> = ({_id,text, createdAt, user }) => {
return(
    <div>
        <Row>
          <Col span={24}>
          
          <div >
        
          <div className={style.message_wrapper}>
        <div className={style.message_content}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <div className={style.date_title}> {createdAt}</div>
              <div className={style.author_title}>{user.fullname}</div>
              <Popover  placement="topRight" content={content} trigger="click"> 
               <div className={style.EllipsisOutlined}> <EllipsisOutlined rotate={90} style={{fontSize: '15px'}}/> </div>
              </Popover>
            </div>
            <div className={style.message}> 
               {text}
            </div>
        </div>
        <Avatar
          avatar={user.avatar}
          name={user.fullname}
        />
        </div> 
        
    </div> 
          
          
          </Col>
        </Row> 
    </div>
    
)
}

export default AuthorMessage;
