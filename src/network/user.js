import axios from "./api";
import { grabUserToken } from "../utils/utils";

var token = grabUserToken();

export const fetchUserListRequest = () => {
    //console.log(token.access_token);
    return axios.get("/lists", {
        headers: {
            Authorization: `Bearer ${token.access_token}`
        }
    })
};

//console.log(token)

export const createListRequest = (payload) => {
    return axios.post("lists/create", payload, {
        headers: {
            Authorization: `Bearer ${token.access_token}`,
            "Content-Type": "application/json"
        }
    });
};