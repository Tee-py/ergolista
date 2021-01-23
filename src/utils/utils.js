export const grabUserToken = () => {
    return JSON.parse(localStorage.getItem("userData"));
};