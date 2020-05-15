import { axios } from '../core';

const axios_instance = axios.create(
    {
       
        headers: {
           'token': localStorage.token
        }

    }
)

export const userAPI = {
    getMe: () => {
        let response =  axios_instance('/users/me')
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