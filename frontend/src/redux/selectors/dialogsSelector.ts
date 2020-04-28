import { createSelector } from "reselect";

const getDialogs = (state:any) => {
    return state.dialogs.dialogs_items
}

export const fetchDialogs = createSelector(getDialogs, (dialogs_items: any) => {
    return dialogs_items 
})

export default fetchDialogs