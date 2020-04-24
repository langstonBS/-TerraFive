//compares localstorage keys to a string
//if string maches keys value return true

export default function checkLocalStorage(key) {
    for (let i = 0; i < localStorage.length; i++) {
        let item = localStorage.key(i);
        if (item === key) {
            return true;
        }  
    }
    return false;   
}
    
