
let elem = document.querySelector('#elem');

elem.firstElementChild.style.color = 'red';

elem.lastElementChild.style.color = 'red';




let elem = document.querySelector('elem');

for (let node of elem.childNodes) {
    if (node.nodeType === 1) {
    console.log(node, "узел элемент"); 
} else if (node.nodeType === 3) {
    console.log(node, "текстовый узел")
}


