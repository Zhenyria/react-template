import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'e482bcac-287b-4e87-a789-3f3b2fe4d12d'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    follow(userId) {
        return instance.post('follow/' + userId)
            .then(response => {
                return response.data.resultCode === 0;
            })
    },
    unfollow(userId) {
        return instance.delete('follow/' + userId)
            .then(response => {
                return response.data.resultCode === 0;
            })
    },
    getProfile(userId) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId);
    }
}

export const authAPI = {
    getAuth() {
        return instance.get('auth/me')
            .then(response => {
                let resultCode = response.data.resultCode;
                return {
                    resultCode,
                    data: resultCode === 0 ? response.data.data : null
                }
            })
    }
}