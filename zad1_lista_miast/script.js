let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];
let newELement = [];
let textNode = [];
let attrNode = [];
let lista = document.getElementById('lista');

for(i = 0; i < cities.length; i++) {
    newELement[i] = document.createElement('li');
    textNode[i] = document.createTextNode(`${cities[i]}`);
    attrNode[i] = document.createAttribute('class');
    attrNode[i].value = 'city';
    newELement[i].appendChild(textNode[i]);
    newELement[i].setAttributeNode(attrNode[i]);
    lista.appendChild(newELement[i]);
    // console.log(newELement[i]);
}
