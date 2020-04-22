///create user object
//takes in string and exports


export default function createUser(nameIn, email) {

    const user = {
        name: nameIn,
        id: email,
        img: 0,
        favorites:{ },
    };
    
    return user;
}


 