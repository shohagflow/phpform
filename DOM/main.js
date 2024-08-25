// let list = document.createElement('li');
// list.innerHTML="<a href=''>Home</a>";
// let menu = document.getElementById('menu');
// menu.appendChild(list);

// let list = document.createElement('li');
// list.textContent = "Start";
// let menu = document.getElementById('menu');
// menu.insertBefore(list,menu.firstElementChild);

// let list = document.createElement('li');
// list.textContent = "Start";
// let menu = document.getElementById('menu');
// menu.insertBefore(list,menu.firstElementChild.nextSibling);

let list = document.createElement('li');
list.textContent = "Start";
let menu = document.getElementById('menu');
menu.insertBefore(list,menu.lastElementChild.nextSibling);

