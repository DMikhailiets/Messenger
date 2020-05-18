import React, { useEffect } from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import { Message } from '../../components'
import socket from '../../core/socket'

type MessagesProps = {
    dialogId: string,
    getMessages: any,
    messagesItems: any,
    partner: any,
    dialog: any,
    user: any
}



const Messages:React.FC<MessagesProps> = ({dialogId, user, dialog, partner, getMessages, messagesItems}) => {     
  const onNewMessage = () => {
    getMessages(dialogId);
  }

  useEffect(() => {
     getMessages(dialogId)
  },[dialogId])
  useEffect(() => {

    
    socket.on("SERVER:NEW_MESSAGE",  onNewMessage)
    if(!messagesItems.length){
      getMessages(dialogId)
    }
    return () => {socket.removeListener("SERVER:NEW_MESSAGE",  onNewMessage)};
  },[messagesItems])

  let messagesArray = messagesItems.map( (message: any) => <Message dialog={dialog} partner={partner} key={message._id} {...message}/>)

    return(
    <div>
        {
          (!messagesItems.length)
          ?<LoadingOutlined style={{minHeight: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}/>
          : messagesArray
        }
    </div>
  )
  }
 
export default Messages