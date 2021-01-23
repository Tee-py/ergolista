import axios from "./api";
import { grabUserToken } from "../utils/utils";

export const fetchUserListRequest = () => {
    const token = grabUserToken();
    console.log(token.access_token);
    return axios.get("/lists", {
        headers: {
            Authorization: `Bearer ${token.access_token}`
        }
    })
};

export const createListRequest = (payload)