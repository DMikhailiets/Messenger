import { createSelector } from "reselect";
import { AppState } from "../store";

const getDialogs = (state: AppState) => {
    return state.dialogs.dialogs_items
}

export const fetchDialogs = createSelector(getDialogs, (dialogs_items: any) => {
    return dialogs_items 
})

export default fetchDialogs