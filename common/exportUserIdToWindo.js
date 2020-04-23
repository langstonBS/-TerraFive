//gets url userId and sends it over w


const a = document.createElement('a');
const b = document.createElement('a');
const c = document.createElement('a');
const d = document.createElement('a');
let navConpare = window.location.pathname;
const serchId = new URLSearchParams(window.location.search);
const keyID = serchId.get('userId');
const f = document.getElementById('nav');
const ul = document.createElement('ul');



export default function getAndSendToUser() {


    a.href = `../city-map/index.html?userId=${keyID}`;
    a.textContent = 'City Map';
    b.href = `../hike-list/index.html?userId=${keyID}`;
    b.textContent = 'List of Hikes';
    c.href = `../favorites/index.html?userId=${keyID}`;
    c.textContent = 'Favorites';
    d.href = `../about/index.html?userId=${keyID}`;
    d.textContent = 'About Us';
    
    checkAndApend(a);
    checkAndApend(b);
    checkAndApend(c);
    checkAndApend(d);

    f.appendChild(ul);

}

function checkAndApend(navURL) {
    const li = document.createElement('li');
    if (navURL.pathname !== navConpare) {
        li.appendChild(navURL);
        ul.appendChild(li);
    }

}
