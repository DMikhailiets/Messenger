import { AppState } from './../store';
import { createSelector } from "reselect";

const getUserInfo = (state: AppState) => {
    return state.userData
}

export const fetchUserData = createSelector(getUserInfo, (userData: any) => {
    return  userData
})

export default fetchUserData