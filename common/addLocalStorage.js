

export default function addLocalStorage(name, object) {
    let stringifyObject = JSON.stringify(object);
    let key = name.toUpperCase();
    localStorage.setItem(key, stringifyObject);




}

