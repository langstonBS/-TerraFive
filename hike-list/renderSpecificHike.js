//creates a layout for displaying the hike data


export default function renderSpecificHike(hike, userId, quadId) {

    const label = document.createElement('label');
    label.classList.add('specific-hike');

    const image = document.createElement('img');
    image.classList.add('icon');
    image.src = hike.thumbnail;

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'hike-link';

    const h3 = document.createElement('h3');
    const span = document.createElement('span');
    span.textContent = hike.name;
    span.id = 'hike-name';
    h3.append(span);

    label.append(image, input, h3);
    label.addEventListener('click', () => {
        // very createive and resourceful use of query parameters to ferry data and store global state!
        window.location = `../details/index.html?userId=${userId}&mapQuadId=${quadId}&hikeId=${hike.id}`;
    });

    return label;
}