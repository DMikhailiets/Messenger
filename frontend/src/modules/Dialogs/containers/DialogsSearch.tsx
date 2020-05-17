import React, { useEffect, useState} from 'react';
import { default as BaseDialogs}   from '../components/Dialogs'
import socket from '../../../core/socket'

type DialogsProps = {
  getDialogs: any,
  dialogs_items: any,
  setCurrentDialogId: any
}

const Dialogs: React.FC<DialogsProps> = ({ setCurrentDialogId, dialogs_items, getDialogs, ...props}) => {
  
  const onNewDialog = () => {
    console.log("dialog created")
    getDialogs();
  }

    const [inputValue, setValue] = useState("");
    const [filtred, setFiltredItems] = useState(Array.from(dialogs_items));
  
    const onChangeInput = (value:any) => {
      setFiltredItems(
        dialogs_items.filter( 
          (dialog:any) =>
            dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0
        )
      );
      setValue(value);
    };

    
    useEffect(() => {
  
      if(!dialogs_items.length){
        getDialogs()
        socket.on("SERVER:DIALOG_CREATED", onNewDialog)
        //return () => socket.removeListener("SERVER:DIALOG_CREATED", onNewDialog);
      } else {
        setFiltredItems(dialogs_items)
      }
      
    },[dialogs_items])
  
    return ( 
      <BaseDialogs 
      items={filtred}
      onSearch={onChangeInput}
      inputValue={inputValue}
   />              
    );
   
  };
  
  export default Dialogs;