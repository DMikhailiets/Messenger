import React from 'react';
import style from './some_message.module.scss';
import { Comment, Tooltip, Layout } from 'antd';
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

const SomeMessage: React.FC<MessageProps> = ({_id,text, createdAt, user }) => {
   console.log(user)
return(
    <div className={style.message_wrapper}>
        <div className={style.avatar}>
        <Avatar
          avatar={user.avatar}
          name={user.fullname}
        />
        </div>
        <div className={style.message_content}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div className={style.author_title}> Author</div>
                <div className={style.date_title}> {createdAt}</div>
            </div>
            <div className={style.message}> 
                {text}
            </div>
        </div>
        
    </div>
)
}

export default SomeMessage;