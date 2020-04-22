//Function to create list elements for the attractions in the hike details page (returns an li html element)
export default function renderAttraction(attraction) {
    const li = document.createElement('li');
    const name = document.createElement('h4');
    const desc = document.createElement('p');
    const address = document.createElement('p');

    name.textContent = attraction.name;
    desc.textContent = attraction.description;
    address.textContent = attraction.address;


    li.append(name, desc, address);

    return li;

}