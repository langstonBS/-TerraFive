import getAndSendToUser from '../common/exportUserIdToWindo.js';

//deisplays map links and then creates an id based on the click 
//the id is mapQuadId

getAndSendToUser();

const nw = document.getElementById('northwest');
const ne = document.getElementById('northeast');
const se = document.getElementById('southeast');
const sw = document.getElementById('southwest');
const serchId = new URLSearchParams(window.location.search);
const keyID = serchId.get('userId');

mapdata();

function mapdata() {
    // again, cool use of query params to track and manipulate app state
    nw.href = `../hike-list/index.html?userId=${keyID}&mapQuadId=Northwest`;
    nw.textContent = 'Northwest';
    ne.href = `../hike-list/index.html?userId=${keyID}&mapQuadId=Northeast`;
    ne.textContent = 'Northeast';
    sw.href = `../hike-list/index.html?userId=${keyID}&mapQuadId=Southwest`;
    sw.textContent = 'Southwest';
    se.href = `../hike-list/index.html?userId=${keyID}&mapQuadId=Southeast`;
    se.textContent = 'Southeast';
}






