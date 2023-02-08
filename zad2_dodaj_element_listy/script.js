let lista = document.getElementById('items');
let but = document.querySelector('button');
let item = 4;

but.onclick = function() 
{
    newELement = document.createElement('li');
    textNode = document.createTextNode(`Item ${item}`);
    attrNode = document.createAttribute('class');
    attrNode.value = 'item';
    console.log(newELement);
    newELement.appendChild(textNode);
    newELement.setAttributeNode(attrNode);
    lista.appendChild(newELement);
    item++;
}