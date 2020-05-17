import React, { useEffect } from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import { Message } from '../../components'
 
type MessagesProps = {
    dialogId: string,
    getMessages: any,
    messagesItems: any
}



const Messages:React.FC<MessagesProps> = ({dialogId, getMessages, messagesItems}) => {     
    console.log(dialogId)
  useEffect(()=>{
    getMessages(dialogId)
  },[dialogId])
  let messagesArray = messagesItems.map( (message: any) => <Message key={message._id} {...message}/>)

    return(
    <div>
        {
          (messagesItems.length == 0)
          ?<LoadingOutlined style={{minHeight: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}/>
          : messagesArray
        }
    </div>
  )
  }
 
export default Messages