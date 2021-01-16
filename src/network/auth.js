import axios from "./api";


export const createUserRequest = (payload) => {
    return axios.post("register", payload)
}

export const loginUserRequest = (payload) => {
    return axios.post("login", payload)
}