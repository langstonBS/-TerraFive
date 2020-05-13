//takes in key key value and object
//uses key value to look throug local storage 

// great util--this kind of feels like how localStorage.setItem should work out of the box
export default function addLocalStorage(keyValue, object) {
    let stringifyObject = JSON.stringify(object);
    let key = keyValue.toUpperCase();
    localStorage.setItem(key, stringifyObject);
}

