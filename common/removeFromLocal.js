import findById from './findById.js';
import retrievefromLocalStorage from './retrieveFromLocalStorage.js';

/*
Takes an id and a key and returns an array without the matching object to id
ASSUMES that the value returned from local storage is an array
*/
export default function removeFromFavorits(favoritObject, HikeId) {
    //retrieve matching object in localStorage by key
    
    //const value = retrievefromLocalStorage(key);
    //check if the id is in the array
    //const ifExists = findById(id, value);
    delete favoritObject[HikeId];
    return favoritObject;
 

}