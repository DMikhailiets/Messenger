import { LockOutlined } from '@ant-design/icons';
import { authAPI, userAPI } from '../../API';
import redux from 'redux'
import crypto from 'crypto-js'

const initialstate = {
    token: null,
    fullname: "User"
}



const userReducer = (state: any = initialstate, action: any) => {
    switch(action.type){
        case 'SET_USER_DATA': {
            
            return {
                ...state,
                ...action.userData,
                
            }
        }
        case 'SET_USER_TOKEN': {
            return {
                ...state,
                token: action.token
            }
        }
        case 'LOGOUT': {
            return {
                token: null,
                fullname: "User"
            }
        }
        default: return state
    }
}


const setUserData = (userData: any) => ({type: 'SET_USER_DATA', userData})
const setUserToken = (token: string) => ({type: 'SET_USER_TOKEN', token})

const logOut = () => ({type: 'LOGOUT'})

export const getMe = (token: any) => async (dispatch: redux.Dispatch) => {
    console.log(token)
    let response: any = await userAPI.getMe(token)
    if (response.status == 200){
        dispatch(setUserData(response.data))
    } else {
        return Error()
    }
}

export const logout = () => async (dispatch: redux.Dispatch) => {
    window.localStorage.removeItem('token')
    dispatch(logOut())
    window.location.reload()
}
//findUsers: query => axios.get("/user/find?query=" + query)

// export const findUser = (username: string) => async (dispatch: redux.Dispatch) => {
//     let response: any = await userAPI.searchUser(username)
//     if (response.status == 200){
//         return response
//     } else {
//         return Error()
//     }
// }
export const authUser = (authData: any) => async (dispatch: redux.Dispatch) =>  {
    let response: any = await authAPI.authUser({email: authData.email, password: crypto.SHA256(authData.password).toString()})
    if (response.status == 200){
        dispatch(setUserToken(response.data.token))
        window.localStorage.setItem("token", response.data.token)
        //process.env.token = response.data.token
    } else {
        return Error()
    }
}
export default userReducer