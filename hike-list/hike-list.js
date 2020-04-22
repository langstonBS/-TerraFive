
const serchId = new URLSearchParams(window.location.search);

const keyID = serchId.get('userId');
const localVar = localStorage.getItem(keyID);

console.log(localVar);