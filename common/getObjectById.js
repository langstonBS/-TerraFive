//gets the userId value from HTML url serch
//returns the localstorage item as an object

// this is a creative use of the URL params to track global state for your app
export default function getObjectById() {
    const serchId = new URLSearchParams(window.location.search);
    const keyID = serchId.get('userId');
    const localVar = localStorage.getItem(keyID);
    return localVar;
}


