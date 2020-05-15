import { authAPI, userAPI } from '../../API';
import redux from 'redux'

const initialstate = {
    token: null
}

const userReducer = (state: any = initialstate, action: any) => {
    switch(action.type){
        case 'SET_USER_DATA': {
            return {
                ...state,
                ...action.userData
            }
        }
        case 'SET_USER_TOKEN': {
            return {
                ...state,
                token: action.token
            }
        }
        default: return state
    }
}


const setUserData = (userData: any) => ({type: 'SET_USER_DATA', userData})
const setUserToken = (token: string) => ({type: 'SET_USER_TOKEN', token})

export const getMe = () => async (dispatch: redux.Dispatch) => {
    let response: any = await userAPI.getMe()
    if (response.status == 200){
        dispatch(setUserData(response))
    } else {
        return Error()
    }
}

export const authUser = (authData: any) => async (dispatch: redux.Dispatch) =>  {
    let response: any = await authAPI.authUser(authData)
    if (response.status == 200){
        dispatch(setUserToken(response.data.token))
        localStorage.setItem("token", response.data.token)
    } else {
        return Error()
    }
}
export default userReducer