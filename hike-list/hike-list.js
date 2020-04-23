import hikes from '../data/data.js';
import findByQuadrant from '../common/findByQuadrant.js';
import renderSpecificHike from './renderSpecificHike.js';
import getAndSendToUser from '../common/exportUserIdToWindo.js';


const serchId = new URLSearchParams(window.location.search);
getAndSendToUser();





const keyID = serchId.get('userId');
const localVar = localStorage.getItem(keyID);

console.log(localVar);

const quadrant = 'Northeast';

const name = document.getElementById('quadrant');

name.textContent = quadrant;

// On click, all hikes which share that quadrant's ID

// find hikes matching quadrant through some type of findById function

const filter = findByQuadrant(quadrant, hikes);

const listDest = document.getElementById('quadrant-hikes');

// will be rendered onto that quadrant's hikes page.

filter.forEach(hike => {
    const hikeRender = renderSpecificHike(hike);
    listDest.append(hikeRender);
});