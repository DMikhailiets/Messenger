import React from 'react';
import style from './message.module.scss';
import { Comment, Tooltip, Avatar, Layout } from 'antd';
import moment from 'moment';
import classNames from "classnames";
import AuthorMessage from './AuthorMessage'
import SomeMessage from './SomeMessage'

type MessageProps = {
    _id: string,
    text: string,
    created_at: string,
    user: {
      _id: string,
      fullname: string,
      avatar: null | any,
     }
}
 
const  Message: React.FC<MessageProps> = ( props) => {
return(
    <div>
        
        <SomeMessage/>
        <SomeMessage/>
        <SomeMessage/>
        <SomeMessage/>
        <SomeMessage/>
        <SomeMessage/>
        <SomeMessage/>
        <SomeMessage/>
        <SomeMessage/>
        <SomeMessage/>
        <SomeMessage/>
        <SomeMessage/>
        <SomeMessage/>
        <SomeMessage/>
        <SomeMessage/>
        
        
    </div>
)
}

export default Message;