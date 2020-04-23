//Takes in a KEY for localstorage and returns the matching parsed value
export default function retrievefromLocalStorage(key) {
    const json = localStorage.getItem(`${key}`);
    let value = null;
    if (json) {
        value = JSON.parse(json);
    }
    return value;
}