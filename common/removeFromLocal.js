//function that takes in a key and an object and returns deletes an element within an array and returns the rest of that object
export default function removeFromFavorits(favoritObject, HikeId) {
    //retrieve matching object in localStorage by key

    delete favoritObject[HikeId];
    return favoritObject;


}