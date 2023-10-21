/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) =>{
    temples.forEach(templeElement => {
        let article = document.createElement("article");
        let h3 = document.createElement("h3");
        h3.textContent = templeElement.templeName;
        let img = document.createElement("img")
        img.setAttribute("src",templeElement.imageUrl);
        img.setAttribute("alt",templeElement.location);
        article.appendChild(h3);        
        article.appendChild(img);
        templesElement.append(article);
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {    
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        templeList = await response.json();
        console.log(templeList);
        displayTemples(templeList);
    }
}

/* reset Function */

const reset = function(){
    while(templesElement.firstChild){
        templesElement.removeChild(templesElement.firstChild)
    }
}

/* sortBy Function */

const sortBy = function(temples){
    reset();
    let filter = document.querySelector("#sortBy").value;    
    switch(filter){
        case "utah":
            displayTemples(temples.filter((e) => {                
                if(e.location.match("Utah"))
                    return e;                                                           
                return undefined;
            }));              
            break;            
        case "notutah":
            displayTemples(temples.filter((e) => {                
                if(!e.location.match("Utah"))
                    return e;                                                           
                return undefined;
            }));
            break;
        case "older":
            displayTemples(temples.filter((e) => {  
                let dateArray = e.dedicated.split(",");
                const dateDedTemp = new Date();
                dateDedTemp.setFullYear(parseInt(dateArray[0]));
                let dateToCompare = new Date(1950,0,1);              
                if(dateDedTemp.getFullYear() < dateToCompare.getFullYear())
                    return e;                                                           
                return undefined;
            }));
            break;
        case "all":
            displayTemples(temples)
            break;
    }
}

/* Event Listener */
    
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList) });

getTemples();