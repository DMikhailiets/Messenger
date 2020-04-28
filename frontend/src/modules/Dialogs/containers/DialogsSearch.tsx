import React, { useEffect, useState} from 'react';
import { default as BaseDialogs}   from '../components/Dialogs'

type DialogsProps = {
  getDialogs: any,
  dialogs_items: any,
  setCurrentDialogId: any
}

const Dialogs: React.FC<DialogsProps> = ({ setCurrentDialogId, dialogs_items, getDialogs, ...props}) => {

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
      } else {
        setFiltredItems(dialogs_items)
      }
    },[dialogs_items])
  
    return ( 
      <BaseDialogs 
      setCurrentDialogId={setCurrentDialogId}
      items={filtred}
      onSearch={onChangeInput}
      inputValue={inputValue}
   />              
    );
   
  };
  
  export default Dialogs;