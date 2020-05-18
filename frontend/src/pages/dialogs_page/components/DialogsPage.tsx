import React from 'react'
import  Dialogs  from '../../../modules/Dialogs';

type DialogsPageProps = {
  getDialogs: Function,
  user: {
    fullname: string,
    _id: string
  }
  dialogs: any,
  getMessages: Function,
  messages: any
  sendMessage: Function
}

const DialogsPage: React.FC<DialogsPageProps> =  ({dialogs, sendMessage, messages, user, getDialogs, getMessages}) => {
  return (
      <Dialogs sendMessage={sendMessage} messages={messages} getMessages={getMessages} getDialogs={getDialogs} dialogs_items={dialogs} user={user}/>
  )
}

export default DialogsPage