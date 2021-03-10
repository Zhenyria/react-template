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
    },
    login(email, password, rememberMe = false) {
        return instance.post('auth/login', {email, password, rememberMe});
    },
    logout() {
        return instance.delete('auth/login');
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put('profile/status', {status})
    }
}