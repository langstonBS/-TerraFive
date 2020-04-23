import hikes from '../data/data.js';
import findByQuadrant from '../common/findByQuadrant.js';
import renderSpecificHike from './renderSpecificHike.js';
import getAndSendToUser from '../common/exportUserIdToWindo.js';

const serchId = new URLSearchParams(window.location.search);
getAndSendToUser();

const keyID = serchId.get('userId');
const mapId = serchId.get('mapQuadId');
// const localVar = localStorage.getItem(keyID);

const quadrant = mapId;

const name = document.getElementById('quadrant');

name.textContent = quadrant;

const filter = findByQuadrant(quadrant, hikes);

const listDest = document.getElementById('quadrant-hikes');

filter.forEach(hike => {
    const hikeRender = renderSpecificHike(hike, keyID, mapId);
    listDest.append(hikeRender);
});