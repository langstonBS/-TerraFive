///create user object 

//takes in two strings provided by user
//is upper cased in the input function

export default function createUser(nameIn, email) {
    return {
        name: nameIn,
        id: email,
        img: 0,
        favorites:{ },
    };
}


 