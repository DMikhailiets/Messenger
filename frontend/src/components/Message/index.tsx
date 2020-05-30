import React, { useState } from 'react';
import AuthorMessage from './AuthorMessage'
import SomeMessage from './SomeMessage'
import { isToday } from 'date-fns/esm'
import format from "date-fns/format"
import { Popover, Button } from 'antd';

const getMessageTime = (created_at: string ) => {
    let date = new Date(created_at)
    if (isToday(date)) {
      return format(date, "HH:mm");
    } else {
      return format(date, "dd.MM.yyyy");
    }
  }

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
     dialog: any,
     author: any,
     me: any
}

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
)
 
const  Message: React.FC<MessageProps> = ({_id, me, author, text, dialog, createdAt, user, partner}) => {
const[popover, setPopover] = useState(false)
  return(
      <div>
        {
          (me._id == author._id)
          ? 
              <div><AuthorMessage _id={_id} text={text} createdAt={getMessageTime(createdAt)} user={user} />   </div> 
           
          : <Popover placement="topLeft"content={content} title="Title" trigger="click"> 
              <div> <SomeMessage _id={_id} text={text} createdAt={getMessageTime(createdAt)} partner={partner}/>  </div> 
            </Popover>
        }    
      </div>
  )
}

export default Message;