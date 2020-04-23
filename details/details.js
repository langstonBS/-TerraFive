import hikes from '../data/data.js';
import findById from '../common/findById.js';
import renderAttraction from './renderAttractions.js';
import getAndSendToUser from '../common/exportUserIdToWindo.js';
import addLocalStorage from '../common/addLocalStorage.js';

// Grab the parameters from the URL
const serchId = new URLSearchParams(window.location.search);
// const f = document.getElementById('nav');

// let n = getAndSendToUser(serchId);

// f.appendChild(n);
getAndSendToUser();

// Find the hike id
const hikeId = serchId.get('hikeId');

//Find the hike by id
const hike = findById(hikeId, hikes);

// If there is no hike
if (!hike) {
    window.location = '../city-map/';
}

//Locate all of the destination html elements
const name = document.getElementById('hike-name');
const image = document.getElementById('specific-hike-map');
const attractionsDest = document.getElementById('attractions');
const description = document.getElementById('description');

//Set values of existing elements to matching hike details
name.textContent = hike.name;
image.src = hike.image;
description.textContent = hike.description;

//For each of the items in hike.attractions render attraction
hike.attractions.forEach(attraction => {
    const element = renderAttraction(attraction);
    attractionsDest.append(element);
});

const favorites = [];
let checkbox = document.querySelector('input[name=favorite]');

checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        const favHike = findById(hike.id, favorites);
        if (!favHike) {
            favorites.push(hike);
        }
        addLocalStorage('favorites', favorites);
    }
});
