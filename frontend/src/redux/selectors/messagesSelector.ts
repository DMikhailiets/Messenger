import { createSelector } from "reselect";

const getMessages = (state:any) => {
    return state.messages.messages_items
}

const getDialogId = (state:any) => {

    return state.messages.dialogId
} 

export const fetchDialogId = createSelector(getDialogId, (dialogId: any) => {    
    return dialogId 
})

export const fetchMessages = createSelector(getMessages, (messages_items: any) => {
    return messages_items 
})

