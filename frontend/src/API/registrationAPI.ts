import { axios } from '../core';

export const registrationAPI = {
    reghUser:  (regData: any) => {
        let response =  axios.post('user/registration', regData)
            .then((res) => res
            )
            .catch((error) => {
                return {
                    status:error.response.status
                }
            })
            return response
    },
}
export default registrationAPI