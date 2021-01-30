export const grabUserToken = () => {
    return JSON.parse(localStorage.getItem("userData"));
};

export const deleteUserToken = () => {
    localStorage.setItem("userData", null);
    return true
};