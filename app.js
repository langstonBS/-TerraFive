import createUser from './user.js';
let formData = document.getElementById('log-in');


//brin in local storage to compair name


//create 
//if true load into local storage
//if false then creat a new local strage named the emailid





formData.addEventListener('submit', (event) => { 
    event.preventDefault();
    const data = new FormData(formData);
    let nameData = data.get('name');
    let emalData = data.get('email');
    let x = createUser(nameData, emalData);
    console.log(x);


    //get log in data
    //creates usre 
        //userlist
          //
    
});




