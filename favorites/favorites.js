//beter coments

import getAndSendToUser from '../common/exportUserIdToWindo.js';
import getObjectById from '../common/getObjectById.js';
import hikes from '../data/data.js';
import renderSpecificHike from '../hike-list/renderSpecificHike.js';
import removeFromFavorits from '../common/removeFromLocal.js';
import addLocalStorge from '../common/addLocalStorage.js';
getAndSendToUser();

// pull down the local storage
//find by the key
//pars localstorages
//get the favorit object

//loop and display 

const serchId = new URLSearchParams(window.location.search);

let user = getObjectById(serchId);
let quadID = serchId.get('mapQuadId');
let userId = serchId.get('userId');

let userObject = JSON.parse(user);
let favoritObject = userObject.favorites;



const ul = document.getElementById('attractions');



hikes.forEach(element => {
    
    if (favoritObject[element.id]) {
        let li = document.createElement('li');
        li = renderSpecificHike(element, userId, quadID);
        const liButton = document.createElement('li');
        const buttonRemove = document.createElement('button');
        buttonRemove.textContent = 'remove';
        buttonRemove.addEventListener('click', () => {

            const remove = removeFromFavorits(favoritObject, element.id);

            userObject.favorites = remove;
            addLocalStorge(userId, userObject);
            location.reload();
        });
        liButton.appendChild(buttonRemove);
        ul.appendChild(li);
        ul.appendChild(liButton);
    }

  

    
});
