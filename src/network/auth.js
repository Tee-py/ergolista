import axios from "./api";
import { grabUserToken } from "../utils/utils";


export const createUserRequest = (payload) => {
    return axios.post("register", payload)
}

export const loginUserRequest = (payload) => {
    return axios.post("login", payload)
}

export const refreshTokenRequest = () => {
    const token = grabUserToken();
    return axios.post("refresh", {}, {
        headers: {
            Authorization: ""
        }
    })
}