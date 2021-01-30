export const grabUserToken = () => {
    return JSON.parse(sessionStorage.getItem("userData"));
};

export const deleteUserToken = () => {
    sessionStorage.setItem("userData", JSON.stringify({}));
    return true
};