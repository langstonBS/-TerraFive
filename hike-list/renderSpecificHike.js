//Function that could be used to render a hike in the hike-list
//Could be paired with the findByQuadrant function in the hike-list.js file to only render hikes for a matching quadrant
//Needs to call the url params function to create a link that includes userID and hikeID for the Hike Details page
export default function renderSpecificHike(hike) {

    const label = document.createElement('label');
    label.classList.add('specific-hike');

    const image = document.createElement('img');
    image.classList.add('icon');
    image.src = hike.image;

    //Needs to create link to include url params to be passed to Hike Details page

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'hike-link';

    label.append(image, input);

    return label;
}