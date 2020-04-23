//gets the userId value from HTML url serch
//returns the localstorage item as an object


export default function getObjectById() {
    const serchId = new URLSearchParams(window.location.search);
    const keyID = serchId.get('userId');
    const localVar = localStorage.getItem(keyID);
    return localVar;
}


