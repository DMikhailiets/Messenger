import redux from 'redux'
import { registrationAPI } from '../../API/registrationAPI'
import crypto from 'crypto-js';

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
    //let password  = crypto.SHA256(regData.password)
    let response: any = await registrationAPI.reghUser({email: regData.email, fullname: regData.fullname, password: crypto.SHA256(regData.password).toString()})
    if (response.status == 200){
        console.log('User created!')
    } else {
        return Error()
    }
}

export default registrationReducer