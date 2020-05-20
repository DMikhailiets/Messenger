import { axios } from '../core';

const axios_instance = axios.create(
    {
       
        headers: {
           'token': localStorage.token
        }

    }
)

export const userAPI = {
    getMe: (token: string) => {
        let response =  axios_instance('/users/me', {headers: {'tokensss': token}})
            .then((res) => res
            )
            .catch((error) => {
                return {
                    status:error 
                }
            })
            return response
    },
    searchUser: (username: string) => {
        let response =  axios_instance('/users/find', {headers: {'tokensss': username}})
            .then((res) => res
            )
            .catch((error) => {
                return {
                    status:error 
                }
            })
            return response
    }
}


export default userAPI