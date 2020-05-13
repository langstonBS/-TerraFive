//gets formdata from the user
//if the data is not complet then spits out an error message and returns
//if data exsits then loads the key value and sends the user to the maps
// if data key value dose not exsit then it creates new user
//takes in two strings and uppers them for comparing.
// take user id and put in search params
// else take user from local storage and put id
// in search params


import createUser from './common/user.js';
import addLocalStorage from './common/addLocalStorage.js';
import checkLocalStorage from './common/checkLocalStorage.js';

const formData = document.getElementById('log-in');

const error = document.getElementById('errordata');




formData.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(formData);
    let nameData = data.get('name');
    let emailData = data.get('email');
    // nice work adding validation to your form!
    if (!nameData) {
        error.textContent = 'Enter in a valid name!';
        return;
    }
    if (!emailData) {
        error.textContent = 'Enter in a valid email!';
        return;
    }

    const uppercaseEmail = emailData.toUpperCase();
    
    if (checkLocalStorage(uppercaseEmail)) {
        window.location = `./city-map/index.html?userId=${uppercaseEmail}`;
    } else {
        let user = createUser(nameData.toUpperCase(), uppercaseEmail);
        addLocalStorage(uppercaseEmail, user);
        window.location = `./city-map/index.html?userId=${uppercaseEmail}`;
    }
}
);





