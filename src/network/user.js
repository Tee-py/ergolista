import axios from "./api";
import { grabUserToken } from "../utils/utils";

var token = grabUserToken();

export const fetchUserListRequest = () => {
    return axios.get("/lists", {
        headers: {
            Authorization: `Bearer ${token.access_token}`
        }
    })
};

export const createListRequest = (payload) => {
    return axios.post("lists/create", payload, {
        headers: {
            Authorization: `Bearer ${token.access_token}`,
            "Content-Type": "application/json"
        }
    });
};

export const createTaskRequest = (payload, list_id) => {
    return axios.post(`${list_id}/tasks/create`, payload, {
        headers: {
            Authorization: `Bearer ${token.access_token}`,
            "Content-Type": "application/json"
        }
    });
};

export const logoutRequest = () => {
    return axios.post('/logout', null, 
    {
        headers: {
            Authorization: `Bearer ${token.access_token}`,
        }
    })
};