import React from 'react';
import style from './message.module.scss';
import { Comment, Tooltip, Avatar, Layout } from 'antd';
import moment from 'moment';
import classNames from "classnames";
import AuthorMessage from './AuthorMessage'
import SomeMessage from './SomeMessage'

// type MessageProps = {
//     author: boolean,
//     author_name: string,
//     date: string,
//     message: string,

// }

const  Message: React.FC = ( props) => {
return(
    <div>
        
             <AuthorMessage {...props} />
             <SomeMessage/>
        
    </div>
)
}

export default Message;