//Takes in an id and an array
//Returns null if the id is not found in the array and the object if it is found in the object
//Currently used for finding the hike, among the hikes for the Hike Details Page
//STRETCH: could be updated if the stretch for changing data to hashmap format is changed
export default function findById(id, array) {
    let foundObject = null;
    array.forEach(item => {
        if (item.id === id) {
            foundObject = item;
        }
    });
    return foundObject;
}