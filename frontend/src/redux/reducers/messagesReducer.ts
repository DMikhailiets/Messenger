import { dialogsAPI } from '../../API'



let initialState = {
    messages_items: [
        
    ],
    dialogId: null
}


let setMessages = (messages: any) => ({type: 'SET_MESSAGES_ITEMS', messages}) 
export let setCurrentDialogId = (dialogId: any) => ({type: 'SET_CURRENT_DIALOG_ID', dialogId})

let messagesReducer = (state = initialState, action:any) => {
    switch(action.type) {
        case 'SET_MESSAGES_ITEMS': {
            return {
                ...state, messages_items: action.messages
            }
        }
        case 'SET_CURRENT_DIALOG_ID': {
            
            return {
                ...state, dialogId: action.dialogId
            }
        }
        default : {
            return state
        }
    }
}

export let getMessages = (dialogId: string) => async (dispatch: any) =>{
    let response = await dialogsAPI.getMessages(dialogId)
    dispatch(setMessages(response))
}

export default messagesReducer