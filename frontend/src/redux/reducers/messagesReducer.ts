import { dialogsAPI } from '../../API'

let initialState = {
    messages_items: [],
}

let setMessages = (messages: any) => ({type: 'SET_MESSAGES_ITEMS', messages}) 

let messagesReducer = (state = initialState, action:any) => {
    switch(action.type) {
        case 'SET_MESSAGES_ITEMS': {
            return {
                ...state, messages_items: action.messages
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

export let sendMessage = (message: any) => async (dispatch: any) =>{
    let response = await dialogsAPI.sendMessage(message)
    if (response.status == 200){
    } else {
        return Error()
    }
}

export default messagesReducer