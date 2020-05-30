import React from 'react';
import style from './some_message.module.scss';
import { Comment, Tooltip, Layout } from 'antd';
import moment from 'moment';
import classNames from "classnames";
import Avatar from '../../Avatar';
import { Popover, Button } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons'

type MessageProps = {
    _id: string,
    text: string,
    createdAt: string,
    partner: {
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
  
const SomeMessage: React.FC<MessageProps> = ({_id,text, createdAt, partner }) => {
   
return(
    <div className={style.message_wrapper}>
        <div className={style.avatar}>
        <Avatar
          avatar={partner.avatar}
          name={partner.fullname}
        />
        </div>
        <div className={style.message_content}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Popover  placement="topLeft" content={content} trigger="click"> 
                    <div className={style.EllipsisOutlined}> <EllipsisOutlined rotate={90} style={{fontSize: '15px'}}/> </div>
                </Popover>
                <div className={style.author_title}>{partner.fullname}</div>
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