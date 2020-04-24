//function that takes in a key and an object and deletes the
//element within an array and returns the rest of that object

export default function removeFromFavorits(favoritObject, HikeId) {
    delete favoritObject[HikeId];
    return favoritObject;
}