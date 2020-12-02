// Show Results :
let username = document.querySelector('.username');
let respoints = document.querySelector('.points');
let timer = document.querySelector('.time');
username.innerHTML = `You Complete The Quiz ! ${localStorage.getItem('Name')}`;

respoints.innerHTML = localStorage.getItem('Points');

timer.innerHTML = localStorage.getItem('timer');