import createUser from './common/user.js';
import addLocalStorage from './common/addLocalStorage.js';
import checkLocalStorage from './common/checkLocalStorage.js';

let formData = document.getElementById('log-in');



//brin in local storage to compair name


//create 
//if true load into local storage
//if false then creat a new local strage named the emailid
let error = document.getElementById('errordata');




formData.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(formData);
    let nameData = data.get('name');
    let emailData = data.get('email');
    if (!nameData) {
        error.textContent = 'Enter in a valid name!';
    } else if (!emailData) {
        error.textContent = 'Enter in a valid email!';
    } else {
        if (checkLocalStorage(emailData.toUpperCase())) {
            window.location = `./city-map/index.html?userId=${emailData.toUpperCase()}`;
        }
        let user = createUser(nameData, emailData);
        addLocalStorage(emailData.toUpperCase(), user);
        window.location = `./city-map/index.html?userId=${emailData.toUpperCase()}`;

    }
});




    // take user id and put in search params
    // else take user from local storage and put id
    // in search params


    //URLSearchParams.append(x, emailData.toUpperCase());

    //get log in data
    //creates usre 
        //userlist
          //
