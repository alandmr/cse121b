/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name:"Aland Muñoz",
    photo:"images/img1.jpg",
    favoriteFoods:['Pabellon Criollo','Arepa','Rice with Chicken','Ramen','Teriyaki Chicken'],
    hobbies:['Read books','Share with my wife','Enjoy with my children','Programming'],
    placesLived:[]
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: 'Barquisimeto, VE', 
        length:' 5 months'    
    },
    {
        place: 'Pueblo Nuevo, VE', 
        length:' 2 months'    
    },
    {
        place: 'Valencia, VE', 
        length:' 9 months'    
    },
    {
        place: 'Cagua, VE', 
        length:' 3 months'    
    },
    {
        place: 'Barinas, VE', 
        length:' 2 months'    
    },
    {
        place: 'Coro, VE', 
        length:' 3 months'   
    },
    {
        place: 'Maracay, VE', 
        length:' 3 months'    
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").innerHTML = `${myProfile.name}`;

/* Photo with attributes */
document.querySelector("img").setAttribute("src",myProfile.photo);
document.querySelector("img").setAttribute("alt",myProfile.name);


/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });
  

/* Hobbies List */
myProfile.hobbies.forEach(hobbies => {
    let li = document.createElement('li');
    li.textContent = hobbies;
    document.querySelector('#hobbies').appendChild(li);
  });


/* Places Lived DataList */
myProfile.placesLived.forEach(places => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.textContent = "\uD83C\uDFE1"+places.place;
    dt.style.fontWeight = "bold";
    dd.textContent = "\u00a0"+"\u00a0"+"\u00a0"+"\u00a0"+"\u00a0"+"\u00a0"+places.length;    
    dd.style.fontWeight = "normal";
    dd.style.fontSize = "15px";
    dt.appendChild(dd);
    document.querySelector('#places-lived').appendChild(dt);    
  });



