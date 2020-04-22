import addLocalStorage from './addLocalStorage.js';



export default function checkLocalStorage(key) {
    for (let i = 0; i < localStorage.length; i++) {
        let item = localStorage[i];
        if (item === key) {
            return true;
        }
        
    }
    return false;   
    
}
    
