import { axios } from '../core';

export const dialogsAPI = {
    getDialogs: async () => {
        let response = await axios('./dialogs')
        return response.data
    },
    create: ( data: any ) => {
        return axios.post("/dialogs", { partner: data.partner, text: data.text })},
    getMessages: async (dialogId: string) => {
        let response = await axios('./messages/?dialog='+ dialogId)
        console.log(response)
        return response.data
    },
    sendMessage:  (message: any) => {
        let response =  axios.post('messages', message)
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
export default dialogsAPI