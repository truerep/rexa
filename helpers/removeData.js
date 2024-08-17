export const removeDataFromSession = (key) => {
    window.sessionStorage.removeItem(key);
}
