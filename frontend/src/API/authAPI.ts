import { axios } from '../core';

export const authAPI = {
    authUser:  (authData: any) => {
        let response =  axios.post('/user/login', authData)
            .then((res) => res
            )
            .catch((error) => {
                return {
                    status:error.response.status
                }
            })
            return response
    },
    getMe:  (authData: any) => {
        let response =  axios.post('/user/login', authData)
            .then((res) => res
            )
            .catch((error) => {
                return {
                    status:error.response.status
                }
            })
            return response
    }
}
export default authAPI