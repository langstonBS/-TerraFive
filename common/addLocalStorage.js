

export default function addLocalStorage(keyValue, object) {
    let stringifyObject = JSON.stringify(object);
    let key = keyValue.toUpperCase();
    localStorage.setItem(key, stringifyObject);
}

