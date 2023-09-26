/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Aland Muñoz";
const year = new Date();
let currentYear = year.getFullYear();
let profilePicture = 'images/img1.jpg';



/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
let yearElement = document.querySelector('#year');




/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
document.querySelector('img').setAttribute('src',profilePicture);  
altVariable = `profile image of ${fullName}`;
document.querySelector('img').setAttribute('alt',altVariable)


/* Step 5 - Array */

let foodArray = ["Pabellon Criollo","Arepa","Rice with Chicken","Ramen","Teriyaki Chicken"];
foodElement.innerHTML = foodArray;
let fFood = 'Cesar Salad'
foodArray.push(fFood);
foodElement.innerHTML += `<br>${foodArray}`;
foodArray.shift();
foodElement.innerHTML += `<br>${foodArray}`;
foodArray.pop();
foodElement.innerHTML += `<br>${foodArray}`;





