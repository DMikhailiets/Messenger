import { dialogsAPI } from '../../API'


let initialState = {
    dialogs_items: []
}

let setDialogs = (dialogs: any) => ({type: 'SET_DIALOGS_ITEMS', dialogs}) 

let dialogsReducer = (state = initialState, action:any) => {
    switch(action.type) {
        case 'SET_DIALOGS_ITEMS': {
            return {
                ...state,
                dialogs_items: action.dialogs,
            }
        }
        default : {
            return state
        }
    }
}

export let getDialogs = () => async (dispatch: any) =>{
    let response = await dialogsAPI.getDialogs()
    dispatch(setDialogs(response))
}

export default dialogsReducer