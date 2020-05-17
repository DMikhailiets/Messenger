import React from 'react';
import style from './author_message.module.scss';
import { Comment, Tooltip, Layout, Row, Col } from 'antd';
import moment from 'moment';
import classNames from "classnames";
import Avatar from '../../Avatar';

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

const AuthorMessage: React.FC<MessageProps> = ({_id,text, createdAt, user }) => {
return(
    <div>
        <Row>
          <Col span={24}>
          <div className={style.message_wrapper}>
        <div className={style.message_content}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <div className={style.date_title}> {createdAt}</div>
              <div className={style.author_title}>{user.fullname}</div>
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
          </Col>
        </Row> 
    </div>
    
)
}

export default AuthorMessage;
