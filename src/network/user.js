import axios from "./api";
import { grabUserToken } from "../utils/utils";


export const fetchUserListRequest = () => {
    var token = grabUserToken();
    return axios.get("/lists", {
        headers: {
            Authorization: `Bearer ${token.access_token}`
        }
    })
};

export const createListRequest = (payload) => {
    var token = grabUserToken();
    return axios.post("lists/create", payload, {
        headers: {
            Authorization: `Bearer ${token.access_token}`,
            "Content-Type": "application/json"
        }
    });
};

export const createTaskRequest = (payload, list_id) => {
    var token = grabUserToken();
    return axios.post(`${list_id}/tasks/create`, payload, {
        headers: {
            Authorization: `Bearer ${token.access_token}`,
            "Content-Type": "application/json"
        }
    });
};

export const logoutRequest = () => {
    var token = grabUserToken();
    return axios.post('/logout', null, 
    {
        headers: {
            Authorization: `Bearer ${token.access_token}`,
        }
    })
};