import getAndSendToUser from '../common/exportUserIdToWindo.js';

//deisplays map links and then creates an id based on the click 
//the id is mapQuadId

getAndSendToUser();

const a = document.createElement('a');
const b = document.createElement('a');
const c = document.createElement('a');
const d = document.createElement('a');
const serchId = new URLSearchParams(window.location.search);
const keyID = serchId.get('userId');
const getUl = document.getElementById('map-links');


mapdata();

function mapdata() {


    a.href = `../hike-list/index.html?userId=${keyID}&mapQuadId=Northwest`;
    a.textContent = 'NorthWast';
    b.href = `../hike-list/index.html?userId=${keyID}&mapQuadId=Northeast`;
    b.textContent = 'NorthEast';
    c.href = `../hike-list/index.html?userId=${keyID}&mapQuadId=Southwest`;
    c.textContent = 'Southwest';
    d.href = `../hike-list/index.html?userId=${keyID}&mapQuadId=Southeast`;
    d.textContent = 'Southeast';
    
    checkAndApend(a);
    checkAndApend(b);
    checkAndApend(c);
    checkAndApend(d);
}

function checkAndApend(navURL) {
    const li = document.createElement('li');

    li.appendChild(navURL);
    getUl.appendChild(li);

}






