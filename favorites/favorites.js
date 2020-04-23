
const list = localStorage.getItem('FAVORITES');

const stringList = JSON.parse(list);

const ul = document.getElementById('attractions');

for (let i = 0; i < stringList.length; i++) {
    const listItem = stringList[i];
    const p = document.createElement('p');
    p.textContent = listItem.name;
    ul.appendChild(p);

}





