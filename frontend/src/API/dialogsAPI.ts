import { axios } from '../core';

export const dialogsAPI = {
    getDialogs: async () => {
        let response = await axios('./dialogs')
        return response.data
    },
    getMessages: async () => {
        let response = await axios('./messages')
        console.log(response)
        return response.data
    }
}
export default dialogsAPI