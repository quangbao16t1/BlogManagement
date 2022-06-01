import axiosClient from "./axiosClient";

const authApi = {
    register(user: any) {
        const url = 'register';
        return axiosClient.post(url, user);
    },
    login(data: any) {
        const url = 'login';
        return axiosClient.post(url, data)
            .then((result) => { return result.data });
    },
}

export default authApi