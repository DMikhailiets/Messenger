import { authAPI } from "../API/api"


const SET_USER_DATA = 'SET_USER_DATA'

let initialstate = {
    userData: {
        status: null,
        logined: null
    }
}

const authReducer = (state=initialstate, action: any) => {
    switch(action.type){
        case SET_USER_DATA: {
            console.log(action.userData)
            return {
                 ...state, userData: action.userData
            }
        }
        default: {
            return state
        }
    }
}

const setUserData = (userData: any) => ({type: SET_USER_DATA, userData} )

export const getAuthResponse = (userData: any) => async (dispatch: any) => {
   let response = await authAPI.postUserData(userData)
   if(response.status !== 200){
       console.log(`some error with response ststus ${response.status}`)
   }else{
       dispatch(setUserData(response))
   }
}
export default authReducer