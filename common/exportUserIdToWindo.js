//creates HTML navagation serch


// hmmm, not liking these unreadable names. Anybody inheriting your codebase would have a hard time keeping track of what's what
const a = document.createElement('a');
const b = document.createElement('a');
const c = document.createElement('a');
const d = document.createElement('a');

let navConpare = window.location.pathname;
const serchId = new URLSearchParams(window.location.search);

const keyID = serchId.get('userId');
const f = document.getElementById('nav');
const ul = document.createElement('ul');
const mapId = serchId.get('mapQuadId');


//keeps the keyID pairs 
export default function getAndSendToUser() {
    a.href = `../city-map/index.html?userId=${keyID}&mapQuadId=${mapId}`;
    a.textContent = 'City Map';
    b.href = `../hike-list/index.html?userId=${keyID}&mapQuadId=${mapId}`;
    b.textContent = 'List of Hikes';
    c.href = `../favorites/index.html?userId=${keyID}&mapQuadId=${mapId}`;
    c.textContent = 'Favorites';
    d.href = `../about/index.html?userId=${keyID}&mapQuadId=${mapId}`;
    d.textContent = 'About Us';
    
    // cool use of a util! this could have been an iterative solution, though: [a,b,c,d].forEach(item => checkAndAppend(item));
    checkAndApend(a);
    checkAndApend(b);
    checkAndApend(c);
    checkAndApend(d);

    f.appendChild(ul);

}

//comars url and dose not display curent page
function checkAndApend(navURL) {
    const li = document.createElement('li');
    if (navURL.pathname !== navConpare) {
        li.appendChild(navURL);
        ul.appendChild(li);
    }

}
