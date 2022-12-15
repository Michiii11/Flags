//**************** Variables ****************//
<<<<<<< HEAD
let currentList = new Array(); // Array of the current round

let index = 0; // Current Index of the List
let hintCount = 0; // Count of the letters already shown

let wrongI = 0; // Count for the wrong answers
let wrongCountrys = new Array(); // Array of wrong answers

let mode  // L = Country | H = Capital
let continent = "all" // Current Continent


//**************** Start ****************//
// EventListener
let flag = document.querySelector("main");
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

// Sets the start country list
setCountryList()

// Load Start Page
loadSide("S");
=======
//#region

let countryList = new Array(); // List of the current round
let index = 0; // Index of the current flag
let hintCount = 0; // Count of the shown letters

let wrongI = 0; // Count of the wrong anwsers
let wrongCountrys = new Array(); // List of the wrong anwsers


let type // Gamemode --> L = Country | H = Capital
let continent = "all" // Current continent

//#endregion

//**************** Start ****************//
//#region
>>>>>>> 859ea0407df815191117d7f8ca01fa55789d85a9

// Set or load the Localstorage
if (localStorage.getItem("flagContinent") != undefined) {
    continent = localStorage.getItem("flagContinent")
} else {
    continent = localStorage.setItem("flagContinent", continent);
}
<<<<<<< HEAD
=======
setCountryList()
loadSide('S');
>>>>>>> 859ea0407df815191117d7f8ca01fa55789d85a9

//#endregion

//**************** Loader ****************//
<<<<<<< HEAD
/**
 * Loads the page
 * @param {*} t = Type
 * @param {*} m = Mode
 */
function loadSide(t, m){
    // Clear the side
    document.querySelector('#start').style.display = "none"
    document.querySelector('#mode').style.display = "none"
    document.querySelector('#game').style.display = "none"

    // Set the current side
    switch (t){
        case "S":   document.querySelector('#start').style.display = "flex"; 
                    break;

        case "M":   document.querySelector('#mode').style.display = "flex";
                    if(continent != "all"){ selectContinent(document.querySelector(`.${continent}`)) } // Auto select modes
                    break;

        case "G":   document.querySelector('#game').style.display = "block";
                    mode = m; loadGame();
                    break;
    }
}
function loadGame(){
    document.querySelector('#game h2').innerHTML = `${index+1}/${currentList.length}`
    document.querySelector('section').innerHTML = 
        `<img data-position='show' src="">
        <img data-position='hidden' src="https://flagcdn.com/h120/${currentList[index].code.toLowerCase()}.png">`
    
    if(mode == "H"){
        document.querySelector('section').innerHTML += `<p>${currentList[index].name[0]}</p>`
    }
=======
//#region

/**
 * Loads or deloads the current page
 * @param {*} t is the type of the page
 * @param {*} m is the gamemode
 */
function loadSide(t, m) {
    document.querySelector('#start').style.display = "none"
    document.querySelector('#mode').style.display = "none"
    document.querySelector('#game').style.display = "none"

    switch (t) {
        case "S":
            document.querySelector('#start').style.display = "flex";
            break;
        case "M":
            document.querySelector('#mode').style.display = "flex";
            if (continent != "all") {
                selectContinent(document.querySelector(`.${continent}`))
            }
            break;
        case "G":
            document.querySelector('#game').style.display = "block";
            type = m;
            startGame();
            break;
    }
}

function startGame() {
    document.querySelector('#game h2').innerHTML = `${index+1}/${countryList.length}`

    let hid = document.querySelector('#content div[data-position="hidden"]')
    let show = document.querySelector('#content div[data-position="show"]')

    show.innerHTML = `<img src="">`
    hid.innerHTML = `<img src="https://flagcdn.com/h120/${countryList[index].code.toLowerCase()}.png">`

    if (type == "H") {
        show.innerHTML += `<h3>${countryList[index].name[0]}</h3>`
        hid.innerHTML += `<h3>${countryList[index].name[0]}</h3>`
    }

    let flag = document.querySelector("#input");
    flag.addEventListener("keydown", (event) => {
        if (event.keyCode == 191) { // # --> Skip
            event.preventDefault();
            skip(false, true);
        }
        if (event.keyCode == 187) { // * --> Hint
            event.preventDefault();
            loadHint();
        }
        if (event.keyCode == 13) { // Enter --> Check
            checkCountry(index);
        }
    });
>>>>>>> 859ea0407df815191117d7f8ca01fa55789d85a9

    getCountry();
}

<<<<<<< HEAD
//**************** Setter ****************//


//**************** Helpful ****************//









=======

//#endregion



//**************** Base Functions ****************//
//#region
>>>>>>> 859ea0407df815191117d7f8ca01fa55789d85a9

/**
 * Checks if the guess is correct
 * if it's true it goes into skip()
 * @param {*} i 
 */
function checkCountry(i) {
    let guess = document.querySelector('#input').value.toLowerCase();
<<<<<<< HEAD
    
    let answer = currentList[index].name;
    if(mode == "H"){
        answer = currentList[index].capital;
=======

    let answer = countryList[index].name;
    if (type == "H") {
        answer = countryList[index].capital;
>>>>>>> 859ea0407df815191117d7f8ca01fa55789d85a9
    }

    for (let i = 0; i < answer.length; i++) {
        if (guess.replace(" ", "") == answer[i].toLowerCase().replace(" ", "")) {
            skip(true);
            return;
        }
    }
    skip(false);
}

/**
<<<<<<< HEAD
 * Loads an hint for the flag
 */
let temp = 0;
function loadHint(){
    hintCount++;
    if(hintCount == 1){

        temp++;
        wrongCountrys[wrongI++] = currentList[index];
    }
    document.querySelector('#input').value = ""
    if(mode == "H"){
        document.querySelector('#input').placeholder = currentList[index].capital[0].substring(0,hintCount)
    } else{
        document.querySelector('#input').placeholder = currentList[index].name[0].substring(0,hintCount)
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
                wrongCountrys[wrongI++] = currentList[index];
            } else{
                temp = 0;
            }

            document.querySelector('#input').style.color = "rgb(110, 110, 110)";

            if(mode == "H"){
                document.querySelector('#input').value = currentList[index].capital[0];
            } else{
                document.querySelector('#input').value = currentList[index].name[0];
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
    if(mode == "H"){
        document.querySelector('#input').placeholder = currentList[index].capital[0];
    } else{
        document.querySelector('#input').placeholder = currentList[index].name[0];
    }
}

/**
=======
>>>>>>> 859ea0407df815191117d7f8ca01fa55789d85a9
 * Get the next flag from the api
 * updates the html
 */
function getCountry() {
<<<<<<< HEAD
    if(index >= currentList.length){
        if(wrongCountrys.length == 0){
=======
    if (index >= countryList.length) {
        if (wrongCountrys.length == 0) {
>>>>>>> 859ea0407df815191117d7f8ca01fa55789d85a9
            loadMenu();
        } else {
            setCountryList(true);
        }
    }

<<<<<<< HEAD
    document.querySelectorAll('#game h2')[0].innerHTML = `${index+1}/${currentList.length}`
    document.querySelector('#game img[data-position="hidden"]').setAttribute("src", `https://flagcdn.com/h120/${currentList[index].code.toLowerCase()}.png`);
    document.querySelector('#input').value = "";
    document.querySelector('#input').placeholder = "";
    if(mode == "H"){
        document.querySelectorAll('#game h3')[0].innerHTML = currentList[index].name[0]
=======
    document.querySelectorAll('#game h2')[0].innerHTML = `${index+1}/${countryList.length}`
    document.querySelector('div[data-position="hidden"] img').setAttribute("src", `https://flagcdn.com/h120/${countryList[index].code.toLowerCase()}.png`);
    document.querySelector('#input').value = "";
    document.querySelector('#input').placeholder = "";
    if (type == "H") {
        document.querySelector('#content h3').innerHTML = countryList[index].name[0]
>>>>>>> 859ea0407df815191117d7f8ca01fa55789d85a9
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
function selectContinent(elem) {
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
<<<<<<< HEAD
function setCountryList(type){
    currentList = new Array();
    if(type){
        currentList = [...wrongCountrys];
    } else{
        if(continent == "all"){
            currentList = [...countries];
        } else{
            let j = 0;
            for (let i = 0; i < countries.length; i++) {
                if(countries[i].continent == continent){
                    currentList[j++] = countries[i];
=======
function setCountryList(type) {
    countryList = new Array();
    if (type) {
        countryList = [...wrongCountrys];
    } else {
        if (continent == "all") {
            countryList = [...countries];
        } else {
            let j = 0;
            for (let i = 0; i < countries.length; i++) {
                if (countries[i].continent == continent) {
                    countryList[j++] = countries[i];
>>>>>>> 859ea0407df815191117d7f8ca01fa55789d85a9
                }
            }
        }
    }
<<<<<<< HEAD
    currentList = currentList.sort(() => {return Math.random() - 0.5})
=======
    countryList = countryList.sort(() => {
        return Math.random() - 0.5
    })
>>>>>>> 859ea0407df815191117d7f8ca01fa55789d85a9

    index = 0;
    wrongI = 0;
    wrongCountrys = new Array();
}

//#endregion

//**************** Game Features ****************//
//#region

/**
 * Loads an hint for the flag
 */
let temp = 0;

function loadHint() {
    hintCount++;
    if (hintCount == 1) {

        temp++;
        wrongCountrys[wrongI++] = countryList[index];
    }
    document.querySelector('#input').value = ""
    if (type == "H") {
        document.querySelector('#input').placeholder = countryList[index].capital[0].substring(0, hintCount)
    } else {
        document.querySelector('#input').placeholder = countryList[index].name[0].substring(0, hintCount)
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
function skip(ind, typ) {
    if (!ind) { // Falsche Eingabe
        if (typ) { // Geskippte Eingabe
            if (temp == 0) {
                wrongCountrys[wrongI++] = countryList[index];
            } else {
                temp = 0;
            }

            document.querySelector('#input').style.color = "rgb(110, 110, 110)";

            if (type == "H") {
                document.querySelector('#input').value = countryList[index].capital[0];
            } else {
                document.querySelector('#input').value = countryList[index].name[0];
            }

            document.querySelector('#input').disabled = true;
            skipped();


            setTimeout(function () {
                index++;
                document.querySelector('#input').disabled = false;
                document.querySelector('#input').style.color = "white";
                getCountry();
            }, 1000);
            return;
        }

        // Fail Animation
        document.querySelector('#input').style.color = "red";
        document.querySelector('#input').style.animation = "shake 0.5s"

        setTimeout(function () {
            document.querySelector('#input').style.color = "white";
            document.querySelector('#input').style.animation = "none"
        }, 500);
        return;

    } else { // Richtige Eingabe

        // Accept Animation
        document.querySelector('#input').style.color = "green";
        setTimeout(function () {
            document.querySelector('#input').style.color = "white";
            index++;
            getCountry();
        }, 500);
    }
}

/**
 * Swaps the images for the animation
 */
function swap() {
    let hid = document.querySelector('div[data-position="hidden"]')
    let show = document.querySelector('div[data-position="show"]')
    hid.style.display = "block"

    hid.setAttribute("data-position", "show");
    show.setAttribute("data-position", "hidden");
}

/**
 * Skipped guess
 */
function skipped() {
    if (type == "H") {
        document.querySelector('#input').placeholder = countryList[index].capital[0];
    } else {
        document.querySelector('#input').placeholder = countryList[index].name[0];
    }
}

//#endregion