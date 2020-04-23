import hikes from '../data/data.js';
import findById from '../common/findById.js';
import renderAttraction from './renderAttractions.js';
import getAndSendToUser from '../common/exportUserIdToWindo.js';


const serchId = new URLSearchParams(window.location.search);
const f = document.getElementById('nav');

let n = getAndSendToUser(serchId);

f.appendChild(n);


//OPEN:
// Needs an eventListener for the favorites button
// How to update favorites? Do we need a helper function?


// COMMENTED OUT FOR THE TIME BEING BUT CAN BE UNCOMMENTED WHEN URL PARAMS ARE ACCESSED
// Grab the parameters from the URL
// const searchParams = new URLSearchParams(window.location.search);

// Find the hike id
// const hikeId = searchParams.get('HIKEID');

// To make sure things are working using temporary hikeId before taking in searchparams
const hikeId = 'pittockMansion';

//Find the hike by id
const hike = findById(hikeId, hikes);

//console.log(hike);

// If there is no hike
if (!hike) {
    window.location = '../city-map/';
}

//Locate all of the destination html elements
const name = document.getElementById('hike-name');
const image = document.getElementById('specific-hike-map'); //needs to grab by an id for the element
const attractionsDest = document.getElementById('attractions');
const description = document.getElementById('description');
// const fav = document.getElementById('favorite); //find favorite html element and then later add event listener for adding / removing from favorites
// const desc = document.getElementyById('hike-desc'); //find matching element in html

//Set values of existing elements to matching hike details
name.textContent = hike.name;
image.src = hike.image; //check with above
description.textContent = hike.description;

//For each of the items in hike.attractions
hike.attractions.forEach(attraction => {
    const element = renderAttraction(attraction);
    attractionsDest.append(element);
});

const favorites = [];
var checkbox = document.querySelector('input[name=favorite]');

checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        const favHike = findById(hike.id, favorites);
        if (!favHike) {
            favorites.push(hike);    
        }
        addLocalStorage('favorites', favorites);
        console.log('Is checked');
        
        console.log(favorites);
    } else 
    {
        console.log('Not checked ');
    }
});
