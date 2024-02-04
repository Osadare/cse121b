/* W02-Task - Profile Home Page */


/* Step 2 - Variables */
const fullName = "Bunmi Osaadre";
const  currentYear = '2024';
const profilePicture = 'images/profile.png';


/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`

window.onload = () => {

    function favFoods(foodArray) {
        foodElement.innerHTML = foodArray.reduce((acc, curr) => {
            acc += `<br>${curr}`
            return acc
        }, '')
    }

    nameElement.innerHTML = `<strong>${fullName}</strong>`;
    yearElement.textContent = currentYear;
    imageElement.setAttribute('src', profilePicture)
    imageElement.setAttribute('alt', `Profile image of ${fullName}`)

    /* Step 5 - Array */

    const favoriteFoods = []

    favoriteFoods.push('Pasta,Rice, Beans')
    favFoods(favoriteFoods)

    let newFavoriteFoods = 'ice cream,Pizza,Chocolate'

    favoriteFoods.push(newFavoriteFoods)
    favFoods(favoriteFoods)

    favoriteFoods.pop();
    favFoods(favoriteFoods)

    favoriteFoods.push(' Pasta,Rice, Beans')
    favFoods(favoriteFoods)

    favoriteFoods.shift()
    favFoods(favoriteFoods)

    newFavoriteFoods = 'Ice cream,Pizza,Chocolate'

    favoriteFoods.push(newFavoriteFoods)
    favFoods(favoriteFoods)
   
}