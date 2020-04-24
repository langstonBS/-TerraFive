//takes in key key value and object
//uses key value to look throug local storage 


export default function addLocalStorage(keyValue, object) {
    let stringifyObject = JSON.stringify(object);
    let key = keyValue.toUpperCase();
    localStorage.setItem(key, stringifyObject);
}

