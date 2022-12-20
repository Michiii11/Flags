//**************** Variables ****************//
//#region

let countryList = []; // List of all possible countries in current round - eruope selected: all european countries
let index = 0; // Index of the current flag
let hintCount = 0; // Count of the shown letters

let wrongCountrys = []; // List of the wrong anwsers

let gameMode //Country | Capital
let continent = "all" // Current continent

const completeCounter = document.querySelectorAll('#game h2')[0]; // e.g. 0/5
function hidBox(){return document.querySelector('#content div[data-position="hidden"]')} // return hidden Flag Box
function showBox(){return document.querySelector('#content div[data-position="show"]')} // return visible Flag Box
const scoreField = document.querySelector('#score') // e.g. Richtig 2/2
const capitalField = document.querySelector('div[data-position="hidden"] h3'); // Field for the capital city
const inputField = document.querySelector('#input'); // input Field of the page

//#endregion

//**************** Loader ****************//
//#region

// Set or load the Localstorage
if (localStorage.getItem("flagContinent") != undefined) {
    continent = localStorage.getItem("flagContinent")
} else {
    continent = localStorage.setItem("flagContinent", continent);
}

const startPage = document.querySelector('#start');
const modePage = document.querySelector('#mode');
const gamePage = document.querySelector('#game');
loadSide('S');
/**
 * Loads or deloads the current page
 * @param {*} t is the type of the page
 * @param {*} m is the gamemode
 */
function loadSide(t, m) {
    // Reset the pages
    startPage.style.display = "none"
    modePage.style.display = "none"
    gamePage.style.display = "none"

    // Load the current page
    switch (t) {
        case "S":
            startPage.style.display = "flex";
            break;
        case "M":
            modePage.style.display = "flex";
            if (continent != "all") {
                selectContinent(document.querySelector(`.${continent}`))
            }
            break;
        case "G":
            gamePage.style.display = "block";
            gameMode = m;
            startGame();
            break;
    }
}

function startGame() {
    // Set start img
    showBox().innerHTML = `<img src="">`
    hidBox().innerHTML = `<img src="https://flagcdn.com/h120/${countryList[index].code.toLowerCase()}.png">`

    // Capital Mode
    if (gameMode == "Capital") {
        showBox().innerHTML += `<h3></h3>`
        hidBox().innerHTML += `<h3>${countryList[index].name[0]}</h3>`
    }

    getCountry();
}

function toggleSidebar(elem){
    if(elem.dataset.state == "open"){
        console.log(elem);
        elem.dataset.state = "close"

        setTimeout(function(){     
            elem.querySelector(".heading").setAttribute("onclick", "")
            elem.setAttribute("onclick", "toggleSidebar(this)")
        },10)

    } 
    else{
        elem.dataset.state = "open"

        elem.querySelector(".heading").setAttribute("onclick", "toggleSidebar(this.parentNode)")
        elem.setAttribute("onclick", "")

    }
}


//#endregion

//**************** PreGame Functions ****************//
//#region

/**
 * Selects the continent from the class
 * @param {*} elem continent
 */
function selectContinent(elem) {
    document.querySelector('.selected').classList.remove("selected")
    elem.classList.add("selected")
    continent = elem.classList[0]

    localStorage.setItem('flagContinent', continent);
    setCountryList();
}

setCountryList()
/**
 * Set the List dependend on the Type of Continent
 * @param {boolean} isNewRound true = next round with false answers
 */
function setCountryList(isNewRound) {
    countryList = [];
    if (isNewRound) { // Clone false answers into the country list
        countryList = [...wrongCountrys];
    } else {
        if (continent == "all") { // Clone full list into the country list
            countryList = [...countries];
        } else {
            for (let i = 0; i < countries.length; i++) { 
                if (countries[i].continent == continent) { // Filter the continent
                    countryList.push(countries[i]); // Set the country into the country list
                }
            }
        }
    }

    // Shuffle the country List
    countryList = countryList.sort(() => {
        return Math.random() - 0.5
    })

    // Reset the 
    index = 0;
    wrongCountrys = [];
}

//#endregion

//**************** InGame Features ****************//
//#region

/**
 * Get the next flag from the api
 * updates the html
 */
function getCountry() {
    if (index >= countryList.length) { // Check if finished
        if (wrongCountrys.length == 0) { // Finished than go back to Menu
            finishedRound();
        } else { // Next Round with the wrong answers
            setCountryList(true);
        }
    }

    completeCounter.innerHTML = `${index+1}/${countryList.length}`
    hidBox().querySelector('img').setAttribute("src", `https://flagcdn.com/h120/${countryList[index].code.toLowerCase()}.png`);
    
    inputField.value = "";
    inputField.placeholder = "";

    // Capital mode
    if (gameMode == "Capital") {
        hidBox().querySelector('h3').innerHTML = countryList[index].name[0]
    }

    swap(); // Call swap animation

    hintCount = 0; // New country = reset hintCount

    scoreField.innerHTML = `Richtig ${index - wrongCountrys.length} / ${index}`;
    inputField.focus();
}

/**
 * Checks if the guess is correct
 * if it's true it goes into skip() 
 */
function checkCountry() {
    let guess = inputField.value.toLowerCase();
    let answer = countryList[index].name;

    // Capital Mode
    if (gameMode == "Capital") {
        answer = countryList[index].capital;
    }

    // Loop goes throw all names from current Country
    for (let i = 0; i < answer.length; i++) {
        if (guess.replace(" ", "") == answer[i].toLowerCase().replace(" ", "")) {
            skip(true);
            return;
        }
    }
    skip(false);
}

let temp = 0;
/**
 * Loads an hint for the flag
 */
function loadHint() {
    hintCount++;
    if (hintCount == 1) {

        temp++;
        wrongCountrys.push(countryList[index]);
    }
    inputField.value = ""
    if (gameMode == "Capital") {
        inputField.placeholder = countryList[index].capital[0].substring(0, hintCount)
    } else {
        inputField.placeholder = countryList[index].name[0].substring(0, hintCount)
    }

    let flag = inputField;
    flag.focus();
}

/**
 * Skips the current flag
 * @param {*} ind is the indicator if the guess was right or false
 * @param {*} typ is the indicator if the guess was completly skipped or not
 * @returns 
 */
function skip(ind, typ) {
    if (ind) { // Richtige Eingabe

        // Accept Animation
        inputField.style.color = "green";
        setTimeout(function () {
            inputField.style.color = "white";
            index++;
            getCountry();
        }, 500);

        return
    }

    //falsche Eingabe
    if (typ) { // Geskippte Eingabe
        if (temp == 0) {
            wrongCountrys.push(countryList[index]);
        } else {
            temp = 0;
        }

        inputField.style.color = "rgb(110, 110, 110)";

        if (gameMode == "Capital") {
            inputField.value = countryList[index].capital[0];
        } else {
            inputField.value = countryList[index].name[0];
        }

        inputField.disabled = true;
        skipped();


        setTimeout(function () {
            index++;
            inputField.disabled = false;
            inputField.style.color = "white";
            getCountry();
        }, 1000);
        return;
    }

    // Fail Animation
    inputField.style.color = "red";
    inputField.style.animation = "shake 0.5s"

    setTimeout(function () {
        inputField.style.color = "white";
        inputField.style.animation = "none"
    }, 500);
    return;
}

/**
 * Swaps the images for the animation
 */
function swap() {
    hidBox().style.display = "block";

    let hidden = hidBox();
    let shown = showBox();
    hidden.setAttribute("data-position", "show");
    shown.setAttribute("data-position", "hidden");
}

/**
 * Skipped guess, writes the answeer into the placeholder
 */
function skipped() {
    if (gameMode == "Capital") {
        inputField.placeholder = countryList[index].capital[0];
    } else {
        inputField.placeholder = countryList[index].name[0];
    }
}

function finishedRound(){
    let game = document.querySelector('#game');
    let content = game.innerHTML
    
    game.innerHTML = 
    `<div id="finishedRound">
        <h2>You finished the round</h2>
        <p>You got ${countryList.length - wrongCountrys.length} out of ${countryList.length}</p>
        <div id="button">
            <p onclick=""></p>
            <p onclick=""></p>
        </div>
    </div>`
}

//#endregion

//**************** Event Listener ****************//
//#region

let flag = inputField;
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
        checkCountry();
    }
});

//#endregion