import React from 'react';
import style from './some_message.module.scss';
import { Comment, Tooltip, Avatar, Layout } from 'antd';
import moment from 'moment';
import classNames from "classnames";

function SomeMessage(props: any) {
    //className={style.message_item}
    let status = 'isAuthor'
return(
    <div className={style.message_wrapper}>
        <div className={style.avatar}>
        <Avatar style={{minWidth: '25px'}}
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
        </div>
        <div className={style.message_content}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div className={style.author_title}> Author</div>
                <div className={style.date_title}> 28.07.2012 12:53</div>
            </div>
            <div className={style.message}> 
                it's message  it's message  it's message it's message  it's message 
                it's message  it's message  it's message it's message  it's message 
                it's message  it's message  it's message it's message  it's message 
                it's message  it's message  it's message it's message  it's message 
                it's message  it's message  it's message it's message  it's message 
            </div>
        </div>
        
    </div>
)
}

export default SomeMessage;