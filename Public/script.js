let newCountryList = countries.sort(() => {return Math.random() - 0.5});
let countryList = new Array();
let index = 0;
let wrongI = 0;
let wrongCountrys = new Array();
let hintCount = 0;

let type  // L = Country | H = Capital
let continent = "all"

// Set or load the Localstorage
if(localStorage.getItem("flagContinent") != undefined){
    continent = localStorage.getItem("flagContinent")
} else{
    continent = localStorage.setItem("flagContinent", continent);
}
setCountryList()
loadStart();


function loadStart(){
    document.querySelector('#start').style.display = "flex"
    document.querySelector('#mode').style.display = "none"
    document.querySelector('#game').style.display = "none"
}

/**
 * Loads the menu
 */
function loadMenu(){
    document.querySelector('#start').style.display = "none"
    document.querySelector('#mode').style.display = "flex"
    document.querySelector('#game').style.display = "none"
    if(continent != "all"){
        selectContinent(document.querySelector(`.${continent}`))
    }
}

/**
 * Loads the Game Template into the HTML
 * @param {*} t is the Gamemode
 */
function loadGame(t){
    document.querySelector('#start').style.display = "none"
    document.querySelector('#mode').style.display = "none"
    document.querySelector('#game').style.display = "block"
    type = t;

    document.querySelector('#game h2').innerHTML = `${index+1}/${countryList.length}`
    document.querySelector('section').innerHTML = 
        `<img data-position='show' src="">
        <img data-position='hidden' src="https://flagcdn.com/h120/${countryList[index].code.toLowerCase()}.png">`
    

    let flag = document.querySelector("#input");
    flag.addEventListener("keydown", (event) => {
        if (event.keyCode == 191) { // # --> Skip
            event.preventDefault();
            skip(false, true);
        }
        if (event.keyCode == 187){ // * --> Hint
            event.preventDefault();
            loadHint();
        }
        if (event.keyCode == 13){ // Enter --> Check
            checkCountry(index);
        }
    });

    getCountry();
}

/**
 * Checks if the guess is correct
 * if it's true it goes into skip()
 * @param {*} i 
 */
function checkCountry(i){
    let guess = document.querySelector('#input').value.toLowerCase();
    
    let answer = countryList[index].name;
    if(type == "H"){
        answer = countryList[index].capital;
    }

    for (let i = 0; i < answer.length; i++) {
        if(guess.replace(" ", "") == answer[i].toLowerCase().replace(" ", "")){
            skip(true);
            return;
        }
    }
    skip(false);
}

/**
 * Loads an hint for the flag
 */
let temp = 0;
function loadHint(){
    hintCount++;
    if(hintCount == 1){

        temp++;
        wrongCountrys[wrongI++] = countryList[index];
    }
    document.querySelector('#input').value = ""
    if(type == "H"){
        document.querySelector('#input').placeholder = countryList[index].capital[0].substring(0,hintCount)
    } else{
        document.querySelector('#input').placeholder = countryList[index].name[0].substring(0,hintCount)
    }

    let flag = document.querySelector("#input");
    flag.focus();
}

/**
 * Skips the current flag
 * @param {*} ind is the indicator if the guess was right or false
 * @param {*} typ is the indicator if the guess was completly skipped or not
 * @returns 
 */
function skip(ind, typ){
    if(!ind){ // Falsche Eingabe
        if(typ){ // Geskippte Eingabe
            if(temp == 0){
                wrongCountrys[wrongI++] = countryList[index];
            } else{
                temp = 0;
            }

            document.querySelector('#input').style.color = "rgb(110, 110, 110)";

            if(type == "H"){
                document.querySelector('#input').value = countryList[index].capital[0];
            } else{
                document.querySelector('#input').value = countryList[index].name[0];
            }

            document.querySelector('#input').disabled = true;
            skipped();


            setTimeout(function(){
                index++;
                document.querySelector('#input').disabled = false;
                document.querySelector('#input').style.color = "white";
                getCountry();
            },1000);
            return;
        }

        // Fail Animation
        document.querySelector('#input').style.color = "red";
        document.querySelector('#input').style.animation = "shake 0.5s"

        setTimeout(function(){
            document.querySelector('#input').style.color = "white";
            document.querySelector('#input').style.animation = "none"
        },500);
        return;

    } else{ // Richtige Eingabe

        // Accept Animation
        document.querySelector('#input').style.color = "green";
        setTimeout(function(){
            document.querySelector('#input').style.color = "white";
            index++;
            getCountry();
        },500);
    }
}

/**
 * Swaps the images for the animation
 */
function swap(){
    let hid = document.querySelector('#game img[data-position="hidden"]')
    let show = document.querySelector('#game img[data-position="show"]')
    hid.style.display = "block"

    hid.setAttribute("data-position", "show");
    show.setAttribute("data-position", "hidden");
}

/**
 * Skipped guess
 */
function skipped(){    
    if(type == "H"){
        document.querySelector('#input').placeholder = countryList[index].capital[0];
    } else{
        document.querySelector('#input').placeholder = countryList[index].name[0];
    }
}

/**
 * Get the next flag from the api
 * updates the html
 */
function getCountry() {
    if(index >= countryList.length){
        if(wrongCountrys.length == 0){
            loadMenu();
        }else{
            setCountryList(true);
        }
    }

    document.querySelectorAll('#game h2')[0].innerHTML = `${index+1}/${countryList.length}`
    document.querySelector('#game img[data-position="hidden"]').setAttribute("src", `https://flagcdn.com/h120/${countryList[index].code.toLowerCase()}.png`);
    document.querySelector('#input').value = "";
    document.querySelector('#input').placeholder = "";
    if(type == "H"){
        document.querySelectorAll('#game h3')[0].innerHTML = countryList[index].name[0]
    }

    swap();

    hintCount = 0;
    
    document.querySelector('#score').innerHTML = `Richtig ${index - wrongI} / ${index}`;
    let flag = document.querySelector("#input");
    flag.focus();

}

/**
 * @param {*} elem continent
 */
function selectContinent(elem){
    console.log(elem)
    document.querySelector('.selected').classList.remove("selected")
    elem.classList.add("selected")
    continent = elem.classList[0]

    localStorage.setItem('flagContinent', continent);
    setCountryList();
}

/**
 * Set the List depend on the Type of Continent
 * @param {*} type true = next round with false answers
 */
function setCountryList(type){
    countryList = new Array();
    if(type){
        countryList = [...wrongCountrys];
    } else{
        if(continent == "all"){
            countryList = [...newCountryList];
        } else{
            let j = 0;
            for (let i = 0; i < newCountryList.length; i++) {
                if(newCountryList[i].continent == continent){
                    countryList[j++] = newCountryList[i];
                }
            }
        }
    }
    countryList = countryList.sort(() => {return Math.random() - 0.5})

    index = 0;
    wrongI = 0;
    wrongCountrys = new Array();
}