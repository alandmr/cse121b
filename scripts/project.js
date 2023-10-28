/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#cards");

let templeList = [];

let PokemonList = [];

let typePokemonList = {
    normal:[
        'https://pokeapi.co/api/v2/pokemon/ditto',
        'https://pokeapi.co/api/v2/pokemon/rattata',
        'https://pokeapi.co/api/v2/pokemon/meowth',
        'https://pokeapi.co/api/v2/pokemon/tauros',
        'https://pokeapi.co/api/v2/pokemon/eevee',
        'https://pokeapi.co/api/v2/pokemon/porygon',
        'https://pokeapi.co/api/v2/pokemon/munchlax',
        'https://pokeapi.co/api/v2/pokemon/slakoth',
        'https://pokeapi.co/api/v2/pokemon/lickitung',
        'https://pokeapi.co/api/v2/pokemon/happiny'
    ],
    fire:[
        'https://pokeapi.co/api/v2/pokemon/charmander',
        'https://pokeapi.co/api/v2/pokemon/vulpix',
        'https://pokeapi.co/api/v2/pokemon/growlithe',
        'https://pokeapi.co/api/v2/pokemon/ponyta',
        'https://pokeapi.co/api/v2/pokemon/magby',
        'https://pokeapi.co/api/v2/pokemon/torchic',
        'https://pokeapi.co/api/v2/pokemon/cyndaquil',
        'https://pokeapi.co/api/v2/pokemon/slugma',
        'https://pokeapi.co/api/v2/pokemon/torkoal',
        'https://pokeapi.co/api/v2/pokemon/chimchar'
    ],
    water:[
        'https://pokeapi.co/api/v2/pokemon/squirtle',
        'https://pokeapi.co/api/v2/pokemon/psyduck',
        'https://pokeapi.co/api/v2/pokemon/poliwag',
        'https://pokeapi.co/api/v2/pokemon/seel',
        'https://pokeapi.co/api/v2/pokemon/krabby',
        'https://pokeapi.co/api/v2/pokemon/horsea',
        'https://pokeapi.co/api/v2/pokemon/goldeen',
        'https://pokeapi.co/api/v2/pokemon/totodile',
        'https://pokeapi.co/api/v2/pokemon/remoraid',
        'https://pokeapi.co/api/v2/pokemon/piplup'
    ],
    grass:[
        'https://pokeapi.co/api/v2/pokemon/chikorita',
        'https://pokeapi.co/api/v2/pokemon/sunkern',
        'https://pokeapi.co/api/v2/pokemon/treecko',
        'https://pokeapi.co/api/v2/pokemon/turtwig',
        'https://pokeapi.co/api/v2/pokemon/cherubi',
        'https://pokeapi.co/api/v2/pokemon/carnivine',
        'https://pokeapi.co/api/v2/pokemon/tangela',
        'https://pokeapi.co/api/v2/pokemon/snivy',
        'https://pokeapi.co/api/v2/pokemon/pansage',
        'https://pokeapi.co/api/v2/pokemon/gossifleur'
    ],
    electric:[
        'https://pokeapi.co/api/v2/pokemon/pikachu',
        'https://pokeapi.co/api/v2/pokemon/voltorb',
        'https://pokeapi.co/api/v2/pokemon/elekid',
        'https://pokeapi.co/api/v2/pokemon/mareep',
        'https://pokeapi.co/api/v2/pokemon/electrike',
        'https://pokeapi.co/api/v2/pokemon/shinx',
        'https://pokeapi.co/api/v2/pokemon/pachirisu',
        'https://pokeapi.co/api/v2/pokemon/blitzle',
        'https://pokeapi.co/api/v2/pokemon/tynamo',
        'https://pokeapi.co/api/v2/pokemon/yamper'
    ],
    psychic:[
        'https://pokeapi.co/api/v2/pokemon/abra',
        'https://pokeapi.co/api/v2/pokemon/espurr',
        'https://pokeapi.co/api/v2/pokemon/drowzee',
        'https://pokeapi.co/api/v2/pokemon/mew',
        'https://pokeapi.co/api/v2/pokemon/wynaut',
        'https://pokeapi.co/api/v2/pokemon/spoink',
        'https://pokeapi.co/api/v2/pokemon/chingling',
        'https://pokeapi.co/api/v2/pokemon/munna',
        'https://pokeapi.co/api/v2/pokemon/hatenna',
        'https://pokeapi.co/api/v2/pokemon/flittle'
    ],
    flying:[       
        'https://pokeapi.co/api/v2/pokemon/cramorant',
        'https://pokeapi.co/api/v2/pokemon/bombirdier',
        'https://pokeapi.co/api/v2/pokemon/flamigo',
        'https://pokeapi.co/api/v2/pokemon/pidgey',
        'https://pokeapi.co/api/v2/pokemon/spearow',
        'https://pokeapi.co/api/v2/pokemon/doduo',       
        'https://pokeapi.co/api/v2/pokemon/articuno',
        'https://pokeapi.co/api/v2/pokemon/zapdos',
        'https://pokeapi.co/api/v2/pokemon/hoothoot',        
        'https://pokeapi.co/api/v2/pokemon/starly'
    ],
    fairy:[
        'https://pokeapi.co/api/v2/pokemon/cleffa',
        'https://pokeapi.co/api/v2/pokemon/togepi',
        'https://pokeapi.co/api/v2/pokemon/snubbull',
        'https://pokeapi.co/api/v2/pokemon/flabebe',
        'https://pokeapi.co/api/v2/pokemon/spritzee',
        'https://pokeapi.co/api/v2/pokemon/swirlix',
        'https://pokeapi.co/api/v2/pokemon/sylveon',
        'https://pokeapi.co/api/v2/pokemon/xerneas',
        'https://pokeapi.co/api/v2/pokemon/comfey',
        'https://pokeapi.co/api/v2/pokemon/milcery'
    ],
    dragon:[
        'https://pokeapi.co/api/v2/pokemon/dratini',
        'https://pokeapi.co/api/v2/pokemon/bagon',
        'https://pokeapi.co/api/v2/pokemon/axew',
        'https://pokeapi.co/api/v2/pokemon/druddigon',
        'https://pokeapi.co/api/v2/pokemon/goomy',
        'https://pokeapi.co/api/v2/pokemon/jangmo-o',
        'https://pokeapi.co/api/v2/pokemon/regidrago',
        'https://pokeapi.co/api/v2/pokemon/latios',
        'https://pokeapi.co/api/v2/pokemon/reshiram',
        'https://pokeapi.co/api/v2/pokemon/gible'
    ],
    rock:[
        'https://pokeapi.co/api/v2/pokemon/bonsly',
        'https://pokeapi.co/api/v2/pokemon/nosepass',
        'https://pokeapi.co/api/v2/pokemon/regirock',
        'https://pokeapi.co/api/v2/pokemon/cranidos',
        'https://pokeapi.co/api/v2/pokemon/roggenrola',
        'https://pokeapi.co/api/v2/pokemon/rockruff',
        'https://pokeapi.co/api/v2/pokemon/rolycoly',
        'https://pokeapi.co/api/v2/pokemon/stonjourner',
        'https://pokeapi.co/api/v2/pokemon/nacli',
        'https://pokeapi.co/api/v2/pokemon/geodude'
    ]
}

/* async displayTemples Function */
const displayPokemon = (pokemons) =>{
    pokemons.forEach(pokemonElement => {
        let article = document.createElement("article");
        article.classList.add("open-modal");
        article.setAttribute("data-open","modal1");
        let h3 = document.createElement("h3");
        h3.textContent = pokemonElement.name[0].toUpperCase()+pokemonElement.name.slice(1);
        let img = document.createElement("img")
        img.setAttribute("src",pokemonElement.sprites.front_default);
        img.setAttribute("alt",pokemonElement.name);
        article.appendChild(h3);        
        article.appendChild(img);
        templesElement.append(article);
    });
}

/* async getTemples Function using fetch()*/
const getPokemon = () => {  
    typePokemonList.normal.forEach(async element => {
        const response = await fetch(element);
        if (response.ok) {
            PokemonList.push(await response.json());                                                                    
         }               
    });         
    typePokemonList.fire.forEach(async element => {
        const response = await fetch(element);
        if (response.ok) {
            PokemonList.push(await response.json());                                
         }
    }); 
    typePokemonList.water.forEach(async element => {
        const response = await fetch(element);
        if (response.ok) {
            PokemonList.push(await response.json());                                
         }
    });
    typePokemonList.grass.forEach(async element => {
        const response = await fetch(element);
        if (response.ok) {
            PokemonList.push(await response.json());                                
         }
    });
    typePokemonList.electric.forEach(async element => {
        const response = await fetch(element);
        if (response.ok) {
            PokemonList.push(await response.json());                                
         }
    });  
    typePokemonList.psychic.forEach(async element => {
        const response = await fetch(element);
        if (response.ok) {
            PokemonList.push(await response.json());                                                                    
         }               
    });         
    typePokemonList.flying.forEach(async element => {
        const response = await fetch(element);
        if (response.ok) {
            PokemonList.push(await response.json());                                
         }
    }); 
    typePokemonList.fairy.forEach(async element => {
        const response = await fetch(element);
        if (response.ok) {
            PokemonList.push(await response.json());                                
         }
    });
    typePokemonList.dragon.forEach(async element => {
        const response = await fetch(element);
        if (response.ok) {
            PokemonList.push(await response.json());                                
         }
    });
    typePokemonList.rock.forEach(async element => {
        const response = await fetch(element);
        if (response.ok) {
            PokemonList.push(await response.json());                                
         }
    });  
  
    
}

/* reset Function */

const reset = function(){
    while(templesElement.firstChild){
        templesElement.removeChild(templesElement.firstChild)
    }
}

/* sortBy Function */

const sortBy = function(pokemonType){
    reset();
    let filter = document.querySelector("#sortBy").value;    
    switch(filter){
        case "normal":
            displayPokemon(pokemonType.filter((e) => { 
                if (e.types.length < 2){
                    if(e.types[0].type.name.match("normal"))
                    return e;                                                                               
                }
                return undefined;                               
            }));              
            break;            
        case "fire":
            displayPokemon(pokemonType.filter((e) => {                
                if (e.types.length < 2){
                    if(e.types[0].type.name.match("fire"))
                    return e;                                                                               
                }
                return undefined;
            })); 
            break;
        case "water":
            displayPokemon(pokemonType.filter((e) => {                
                if (e.types.length < 2){
                    if(e.types[0].type.name.match("water"))
                    return e;                                                                               
                }
                return undefined;
            })); 
            break;
        case "grass":
            displayPokemon(pokemonType.filter((e) => {                
                if (e.types.length < 2){
                    if(e.types[0].type.name.match("grass"))
                    return e;                                                                               
                }
                return undefined;
            })); 
            break;
        case "electric":
            displayPokemon(pokemonType.filter((e) => {                
                if (e.types.length < 2){
                    if(e.types[0].type.name.match("electric"))
                    return e;                                                                               
                }
                return undefined;
            })); 
            break;
        case "psychic":
            displayPokemon(pokemonType.filter((e) => {                
                if (e.types.length < 2){
                    if(e.types[0].type.name.match("psychic"))
                    return e;                                                                               
                }
                return undefined;
            }));
            break;
        case "flying":
            displayPokemon(pokemonType.filter((e) => {  
                if (e.types.length > 1){
                    if(e.types[0].type.name.match("flying")){
                        return e;
                    }                        
                    if(e.types[1].type.name.match("flying")){
                        return e;
                    }                        
                }             
                                                                           
                return undefined;
            }));
            break;
        case "fairy":
            displayPokemon(pokemonType.filter((e) => {  
                if(e.types[0].type.name.match("fairy")){
                    return e;
                }                                                                                                      
                return undefined;
            }));
            break;
        case "dragon":
            displayPokemon(pokemonType.filter((e) => {  
                if(e.types[0].type.name.match("dragon")){
                    return e;
                }                                                                                                      
                return undefined;
            }));
            break;
        case "rock":
            displayPokemon(pokemonType.filter((e) => {  
                if(e.types[0].type.name.match("rock")){
                    return e;
                }                                                                                                      
                return undefined;
            }));
            break;
        case "all":
            displayPokemon(pokemonType)
            break;
    }
}

/* Event Listener */
    
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(PokemonList) });

getPokemon();

window.addEventListener('click',(e) =>{
    article = document.getElementsByTagName("article");
    if (article.length > 0 && e.target.alt != undefined){
        openModal(e.target.alt);        
    }        
});

/*------------- for window modal ------------*/
function openModal(info){
    const openEls = document.querySelectorAll("[data-open]");
    const closeEls = document.querySelectorAll("[data-close]");
    const isVisible = "is-visible";
    let pokemonData = PokemonList.filter((e)=>{
        if(e.name.match(info)){
            return e;                                                           
        }            
        return undefined;                
    });
    
   /*---------------- Image and Pokemon Name --------------------------*/ 
    const outputElement = document.querySelector("#img-modal");
    const html = `<h2>${pokemonData[0].name[0].toUpperCase()+pokemonData[0].name.slice(1)} - Weight: ${pokemonData[0].weight}</h2>
                <img src="${pokemonData[0].sprites.front_default}" alt="Image of ${pokemonData[0].name}">`;
    outputElement.innerHTML = html;

    /*-------------------------- Basic Stats --------------------------*/
    const outputModalStats = document.querySelector("#modal-stats");
    const htmlStats = `<h2>Basic Stats</h2>
    <p><strong>${pokemonData[0].stats[0].stat.name.toUpperCase()}:</strong> ${pokemonData[0].stats[0].base_stat} &nbsp; 
    <strong>${pokemonData[0].stats[1].stat.name.toUpperCase()}:</strong> ${pokemonData[0].stats[1].base_stat} &nbsp;
    <strong>${pokemonData[0].stats[2].stat.name.toUpperCase()}:</strong> ${pokemonData[0].stats[2].base_stat} &nbsp;
    <strong>${pokemonData[0].stats[3].stat.name.toUpperCase()}:</strong> ${pokemonData[0].stats[3].base_stat} &nbsp;
    <strong>${pokemonData[0].stats[4].stat.name.toUpperCase()}:</strong> ${pokemonData[0].stats[4].base_stat} &nbsp;
    <strong>${pokemonData[0].stats[5].stat.name.toUpperCase()}:</strong> ${pokemonData[0].stats[5].base_stat} &nbsp;</p>`;
    outputModalStats.innerHTML = htmlStats;

    /*--------------------- Pokemon Abilities ------------------------------*/

    const outputModalAbilities = document.querySelector("#modal-abilities");
    const htmlAbilitiesH2 = `<h2>Abilities</h2><p>`;
    let htmlAbilities = " ";
    if (pokemonData[0].abilities.length > 1){
        for (let i = 0; i < pokemonData[0].abilities.length; i++){            
            if(!pokemonData[0].abilities[i].is_hidden){
                htmlAbilities += `[${i+1}] - ${pokemonData[0].abilities[i].ability.name[0].toUpperCase()+
                    pokemonData[0].abilities[i].ability.name.slice(1)} <br>`;
            }else{
                htmlAbilities += `[${i+1}] - ${pokemonData[0].abilities[i].ability.name[0].toUpperCase()+
                    pokemonData[0].abilities[i].ability.name.slice(1)} [Special Ability]`;
            }
        }
    }else{
        htmlAbilities = `${pokemonData[0].abilities[0].ability.name[0].toUpperCase()+pokemonData[0].abilities[0].ability.name.slice(1)}`;
    }
    outputModalAbilities.innerHTML = htmlAbilitiesH2+htmlAbilities+`</p>`;

    /*-------------------- Pokemon Moves -------------------------------*/
    const outPutModalMoves = document.querySelector("#modal-moves");
    const htmlMovesH2 = `<h2>Pokemon Moves</h2><p>`;
    let htmlMoves = " ";
    if (pokemonData[0].moves.length > 1){
        let count = 0;
        for (let i = 0; i < pokemonData[0].moves.length; i++){                        
            if (count < 4){
                htmlMoves += `[${i+1}] - ${pokemonData[0].moves[i].move.name[0].toUpperCase()+
                    pokemonData[0].moves[i].move.name.slice(1)} &nbsp;`;
                    count += 1;
            }else{
                htmlMoves += `<br>`;
                count = 0;
            }
                                                   
        }
    }else{
        htmlMoves = `[${1}] - ${pokemonData[0].moves[0].move.name}`;
    }
    outPutModalMoves.innerHTML = htmlMovesH2+htmlMoves+`</p>`;

    /*-------------------- Pokemon Evolutions -----------------------*/    
    async function SpecieData (){        
        const response = await fetch(pokemonData[0].species.url);
        if (response.ok) {
            const SpeciePokemonData = await response.json();
            pokemonEvolution(SpeciePokemonData);
            console.log(SpeciePokemonData);
        }
    }
SpecieData();

    async function pokemonEvolution(data){        
        const response = await fetch(data.evolution_chain.url);
        if (response.ok) {
            const EvoChainPokemon = await response.json();
            /*console.log(EvoChainPokemon);*/
            const outPutModalEvoChain = document.querySelector("#modal-evo-chain");
            const outPutModalEvoChainText = document.querySelector("#modal-evo-chain-text");
            let htmlPokemonEvo = "";            
            let evoPokemon = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
            let url = "";
            let url2 = "";
            let pokemonId1 = ""; 
            let pokemonId2 = ""; 

            const htmlEvoChainH2 = `<h2>Evolution Chain for Pokemon             
            ${EvoChainPokemon.chain.species.name[0].toUpperCase()+EvoChainPokemon.chain.species.name.slice(1)}</h2><p>`;
            if (EvoChainPokemon.chain.evolves_to.length > 1){
                for (let i = 0; i < EvoChainPokemon.chain.evolves_to.length; i++){
                    if (i<1){
                        htmlPokemonEvo += `[${i+1}] ${EvoChainPokemon.chain.species.name[0].toUpperCase()+EvoChainPokemon.chain.species.name.slice(1)}  <br>`; 
                        htmlPokemonEvo += `[${i+2}] ${EvoChainPokemon.chain.evolves_to[i].species.name[0].toUpperCase()+
                            EvoChainPokemon.chain.evolves_to[i].species.name.slice(1)}  <br>`;                       
                    }
                        
                    else                         
                        htmlPokemonEvo += `[${i+2}] ${EvoChainPokemon.chain.evolves_to[i].species.name[0].toUpperCase()+
                            EvoChainPokemon.chain.evolves_to[i].species.name.slice(1)} <br>`;
                }
                htmlPokemonEvo += `</p>`;
                for (let i = 0; i < EvoChainPokemon.chain.evolves_to.length; i++){                     
                    if (i < 1){                        
                        url = EvoChainPokemon.chain.evolves_to[i].species.url;
                        pokemonId1 = url.split("/");
                        htmlPokemonEvo += `<img src="${pokemonData[0].sprites.front_default}">
                        <img src="images/arrow.png" id="modal-evo-chain-arrow"> <img src="${evoPokemon+pokemonId1[6]}.png"> <br>`;
                    }else{
                        url = EvoChainPokemon.chain.evolves_to[i].species.url;
                        url2 = EvoChainPokemon.chain.evolves_to[i-1].species.url;
                        pokemonId1 = url.split("/");
                        pokemonId2 = url2.split("/");
                        htmlPokemonEvo += `<img src="${evoPokemon+pokemonId2[6]}.png">
                        <img src="images/arrow.png" id="modal-evo-chain-arrow"> <img src="${evoPokemon+pokemonId1[6]}.png">`;
                    }
                    
                    
                }
            }else if (EvoChainPokemon.chain.evolves_to.length == 1){
                htmlPokemonEvo += `[${1}] ${EvoChainPokemon.chain.species.name[0].toUpperCase()
                +EvoChainPokemon.chain.species.name.slice(1)}<br>`; 
                htmlPokemonEvo += `[${2}] ${EvoChainPokemon.chain.evolves_to[0].species.name[0].toUpperCase()+
                EvoChainPokemon.chain.evolves_to[0].species.name.slice(1)}<br>`;

                url = EvoChainPokemon.chain.evolves_to[0].species.url;
                pokemonId1 = url.split("/");                                
                htmlPokemonEvo += `<img src="${pokemonData[0].sprites.front_default}"> <img src="images/arrow.png" id="modal-evo-chain-arrow">
                <img src="${evoPokemon+pokemonId1[6]}.png">`;
            }else{
                htmlPokemonEvo += `<p>Pokemon 
                ${EvoChainPokemon.chain.species.name[0].toUpperCase()+EvoChainPokemon.chain.species.name.slice(1)} doesn't has an evolution chain</p>`;

            }
            
            outPutModalEvoChain.innerHTML = htmlEvoChainH2+htmlPokemonEvo;
        }
    }

   
    


     


    const modalHeader = document.querySelector("#mod-header");
    modalHeader.innerHTML = `Data for Pokemon ${info[0].toUpperCase()+info.slice(1)}`;
    

    for (const el of openEls) {
    el.addEventListener("click", function() {
        const modalId = this.dataset.open;
        document.getElementById(modalId).classList.add(isVisible);
    });
    }

    for (const el of closeEls) {
    el.addEventListener("click", function() {
        this.parentElement.parentElement.parentElement.classList.remove(isVisible);
    });
    }

    document.addEventListener("click", e => {
    if (e.target == document.querySelector(".modal.is-visible")) {
        document.querySelector(".modal.is-visible").classList.remove(isVisible);
    }
    });

    document.addEventListener("keyup", e => {
    // if we press the ESC
    if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
        document.querySelector(".modal.is-visible").classList.remove(isVisible);
    }
    });
}
