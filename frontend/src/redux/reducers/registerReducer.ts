import redux from 'redux'
import { registrationAPI } from '../../API/registrationAPI'

let initialState = {

}

const registrationReducer = (state = initialState, action: redux.Action) => {
    switch(action.type){
        default: {
            return state
        }
    }
}

export const registrationUser = (regData:any) => async (dispatch: redux.Dispatch) => {
    let response: any = await registrationAPI.reghUser(regData)
    if (response.status == 200){
        console.log('User created!')
    } else {
        return Error()
    }
}

export default registrationReducer