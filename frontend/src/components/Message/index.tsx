import React from 'react';
import style from './message.module.scss';
import { Comment, Tooltip, Avatar, Layout } from 'antd';
import moment from 'moment';
import classNames from "classnames";
import AuthorMessage from './AuthorMessage'
import SomeMessage from './SomeMessage'
import { isToday } from 'date-fns/esm'
import format from "date-fns/format"

const getMessageTime = (created_at: string ) => {
    let date = new Date(created_at)
    if (isToday(date)) {
      return format(date, "HH:mm");
    } else {
      return format(date, "dd.MM.yyyy");
    }
  };

type MessageProps = {
    _id: string,
    text: string,
    createdAt: string,
    user: {
      _id: string,
      fullname: string,
      avatar: null | any,
     },
     partner: 
     {
      _id: string,
      fullname: string,
      avatar: null | any,
     },
}
 
const  Message: React.FC<MessageProps> = ({_id, text, createdAt, user, partner}) => {
    console.log( "partner", partner )
return(
    <div>
       {
           true
           ? <AuthorMessage _id={_id} text={text} createdAt={getMessageTime(createdAt)} user={user} />
           : <SomeMessage _id={_id} text={text} createdAt={getMessageTime(createdAt)} user={partner}/>
       } 
        
    </div>
)
}

export default Message;