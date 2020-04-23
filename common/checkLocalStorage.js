//compares localstorage keys to a string
//if string maches keys the

//brings in string 

export default function checkLocalStorage(key) {
    for (let i = 0; i < localStorage.length; i++) {
        let item = localStorage.key(i);
        if (item === key) {
            return true;
        }  
    }
    return false;   
}
    
