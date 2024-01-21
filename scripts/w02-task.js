/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Bunmi osadare';
const currentYear = 2024;
let profilePicture = 'images/profile.png';




/* Step 3 - Element Variables */


const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('mprofile');



/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile of ${fullName}`);




/* Step 5 - Array */



const favFoods = ['Pizza', 'Pasta', 'Burger', 'Chocolate'];

foodElement.innerHTML = favFoods;

const newFavFoods = 'Lobster';  
favFoods.push(newFavFoods);

foodElement.innerHTML += `<br>${favFoods}`;

favFoods.shift();

foodElement.innerHTML += `<br>${favFoods}`;

favFoods.pop();

foodElement.innerHTML += `<br>${favFoods}`;