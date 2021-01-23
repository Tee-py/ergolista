import axios from "./api";
import { grabUserToken } from "../utils/utils";

export const fetchUserListRequest = () => {
    const token = grabUserToken();
    return axios.get("/lists", {
        headers: {
            Authorization: `Bearer ${token.access_token}`
        }
    })
};