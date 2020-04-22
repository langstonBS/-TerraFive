import createUser from './common/user.js';
import addLocalStorage from './common/addLocalStorage.js';
import checkLocalStorage from './common/checkLocalStorage.js';

let formData = document.getElementById('log-in');



//brin in local storage to compair name


//create 
//if true load into local storage
//if false then creat a new local strage named the emailid





formData.addEventListener('submit', (event) => { 
    event.preventDefault();
    const data = new FormData(formData);
    let nameData = data.get('name');
    let emailData = data.get('email');
    let user;
    let create = checkLocalStorage(emailData);
    if (!create) {
        user = createUser(nameData, emailData); 
    }

    // take user id and put in search params
    // else take user from local storage and put id
    // in search params


    //URLSearchParams.append(x, emailData.toUpperCase());


    window.location = './city-map/index.html';

    //get log in data
    //creates usre 
        //userlist
          //
    
});




