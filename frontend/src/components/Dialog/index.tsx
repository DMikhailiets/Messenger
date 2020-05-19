import React from 'react'
import style from './dialog.module.scss'
import { Col, Row, Layout, Badge } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import {  Avatar } from '../../components';
import format from "date-fns/format";
import { isToday } from 'date-fns';
import differenceInMinutes from "date-fns/differenceInMinutes";

 type DialogProps = {
    _id: string,
    lastMessage: {
      text: string,
      createdAt: string
    },
    user: any
    createdAt: string,
    partner: {
      _id: string,
      fullname: string,
      avatar: null | any,
      isOnline: boolean
     },
     setPartner: Function,
     dialog: any
}

const getMessageTime = (created_at: string ) => {
    let date = new Date(created_at)
    if (isToday(date)) {
      return format(date, "HH:mm");
    } else {
      return format(date, "dd.MM.yyyy");
    }
  };

const Dialogs: React.FC<DialogProps> = ({ setPartner, user, dialog, lastMessage, createdAt, _id, partner}) => {
  console.log(user._id, dialog.partner._id)
    return (
      <NavLink onClick={() => setPartner(user._id === dialog.author._id? partner : dialog.author)} to={'/main_page/dialogs/'+ _id}>
        {
         (user._id === dialog.author._id)//, dialog.author._id, dialog.partner._id)
         ?<div className={style.dialog_wrapper}>
         <div className={style.message_wrapper}>
             <Avatar name={partner.fullname} avatar={partner.avatar} isOnline={partner.isOnline}/>
             
               <div className={style.text_content}>
               <div className={style.header_data}>
                   <div className={style.author_title}>{partner.fullname}</div>
                   <div className={style.date_title}>{getMessageTime(lastMessage.createdAt)}</div>
               </div>
               <div className={style.message}> 
                 {(lastMessage.text.length > 40)
                 ? (lastMessage.text.slice(0, 40) + ' ...')
                 : (lastMessage.text)
               }  
               </div>
             </div>
             
         </div>
     </div>  
         :  <div className={style.dialog_wrapper}>
         <div className={style.message_wrapper}>
             <Avatar name={dialog.author.fullname} avatar={dialog.author.avatar} isOnline={dialog.author.isOnline}/>
             
               <div className={style.text_content}>
               <div className={style.header_data}>
                   <div className={style.author_title}>{dialog.author.fullname}</div>
                   <div className={style.date_title}>{getMessageTime(lastMessage.createdAt)}</div>
               </div>
               <div className={style.message}> 
                 {(lastMessage.text.length > 40)
                 ? (lastMessage.text.slice(0, 40) + ' ...')
                 : (lastMessage.text)
               }  
               </div>
             </div>
             
         </div>
     </div>
        }
       
      </NavLink>
     
    )
}

export default Dialogs