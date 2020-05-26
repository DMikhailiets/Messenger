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
    findUsers: (query: any) => {
        console.log(query)
        return axios.get("/users/find?query=" + query)}
}


export default userAPI