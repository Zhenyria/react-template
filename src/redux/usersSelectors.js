import {createSelector} from "reselect";

export const getUsers = (state) => {
    return state.usersPage.users;
}

export const usersSelector = createSelector(getUsers, (users) => {
    return users;
});

export const pageSizeSelector = (state) => {
    return state.usersPage.pageSize;
}

export const totalUsersCountSelector = (state) => {
    return state.usersPage.totalUsersCount;
}

export const currentPageSelector = (state) => {
    return state.usersPage.currentPage;
}

export const isFetchingSelector = (state) => {
    return state.usersPage.isFetching;
}

export const isFollowingInProgressSelector = (state) => {
    return state.usersPage.isFollowingInProgress;
}