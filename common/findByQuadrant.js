//Rachel and Nikki tested last night to check if possible to return a subset of the hike data
//Could be used to subset the hikes array to matching passed string quadrant: 'ne' 'nw' 'se' 'sw'
export function findByQuadrant(quadrant, array) {
    return array.filter(item => item.quadrant === quadrant);
}