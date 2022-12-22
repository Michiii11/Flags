//**************** Variables ****************//
//#region

let countryList = []; // List of all possible countries in current round - eruope selected: all european countries
let index = 0; // Index of the current flag
let hintCount = 0; // Count of the shown letters

let wrongCountrys = []; // List of the wrong anwsers

let selectorOrder = {
    "flagType": "country",
    "selectorOrder.flagContinent": "all",
    "selectorOrder.flagMode": "unranked"
}
// Country | Capital // Current continent // Unranked | Ranked


let points // Ranked current points
let tryCount // Ranked try count
let pointsPerTry = [1200, 800, 600, 400, 200] // Point matrix per try
let lives
let startTime
let endTime

const completeCounter = document.querySelectorAll('#game h2')[0]; // e.g. 0/5
function hidBox() {
    return document.querySelector('#content div[data-position="hidden"]')
} // return hidden Flag Box
function showBox() {
    return document.querySelector('#content div[data-position="show"]')
} // return visible Flag Box
const scoreField = document.querySelector('#score') // e.g. Richtig 2/2
const capitalField = document.querySelector('div[data-position="hidden"] h3'); // Field for the capital city
const inputField = document.querySelector('#input'); // input Field of the page

//#endregion

//**************** Loader ****************//
//#region

// Set or load the Localstorage
for (let key in selectorOrder){
    if (localStorage.getItem(key) != undefined) {
        selectorOrder.key = localStorage.getItem(key)
    } else {
        localStorage.setItem(key, selectorOrder.key);
    }
}

// Pages
const startPage = document.querySelector('#start');
const modePage = document.querySelector('#mode');
const gamePage = document.querySelector('#game');
const finishPage = document.querySelector('#finishedRound')

loadSide('S');
/**
 * Loads or deloads the current page
 * @param {*} t is the type of the page
 */
function loadSide(t) {
    // Reset the pages
    startPage.style.display = "none"
    modePage.style.display = "none"
    gamePage.style.display = "none"
    finishPage.style.display = "none"
    document.querySelector('.load').style.display = "none"

    // Load the current page
    switch (t) {
        case "S":
            startPage.style.display = "flex";
            break;
        case "M":
            modePage.style.display = "flex";
            break;
        case "G":
            gamePage.style.display = "block";
            if (selectorOrder.flagMode == "ranked") {
                startRankedGame()
            }
            startGame();
            break;
        case "F":
            finishPage.style.display = "flex"
            finishedRound();
            break;
    }
}

function startGame() {
    // Set start img
    showBox().innerHTML = `<img src="">`
    hidBox().innerHTML = `<img src="https://flagcdn.com/h120/${countryList[index].code.toLowerCase()}.png">`

    // Capital Mode
    if (selectorOrder.flagType == "capital") {
        showBox().innerHTML += `<h3></h3>`
        hidBox().innerHTML += `<h3>${countryList[index].name[0]}</h3>`
    }

    getCountry();
}

function toggleSidebar(elem) {
    if (elem.dataset.state == "open") {
        elem.dataset.state = "close"
        document.querySelector('.switch').style.display = "none"

        setTimeout(function () {
            elem.querySelector(".heading").setAttribute("onclick", "")
            elem.setAttribute("onclick", "toggleSidebar(this)")
        }, 10)

    } else {
        elem.dataset.state = "open"
        document.querySelector('.switch').style.display = "flex"

        elem.querySelector(".heading").setAttribute("onclick", "toggleSidebar(this.parentNode)")
        elem.setAttribute("onclick", "")

    }
}


//#endregion

//**************** PreGame Functions ****************//
//#region

/**
 * Selects the continent from the class
 * @param {*} elem
 * @param {*} type type of the selector
 * T - Type || C - Continent || M - Mode
 */
function selector(elem, type) {
    if (type == "T") {
        document.querySelector('.type .selected').classList.remove("selected")
        elem.classList.add("selected")
        selectorOrder.flagType = elem.classList[0]

        localStorage.setItem('selectorOrder.flagType', selectorOrder.flagType);
        setCountryList();
    }

    if (type == "C") {
        document.querySelector('.continent .selected').classList.remove("selected")
        elem.classList.add("selected")
        selectorOrder.flagContinent = elem.classList[0]

        localStorage.setItem('selectorOrder.flagContinent', selectorOrder.flagContinent);
        setCountryList();
    }

    if (type == "M") {
        document.querySelector('.mode .selected').classList.remove("selected")
        elem.classList.add("selected")
        selectorOrder.flagMode = elem.classList[0]

        localStorage.setItem('selectorOrder.flagMode', selectorOrder.flagMode);
        setCountryList();
    }
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
        if (selectorOrder.flagContinent == "all") { // Clone full list into the country list
            countryList = [...countries];
        } else {
            for (let i = 0; i < countries.length; i++) {
                if (countries[i].continent == selectorOrder.flagContinent) { // Filter the continent
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

/**
 * Starts a ranked game
 */
function startRankedGame() {
    points = 0;
    tryCount = 0;
    lives = 3;

    let continents = [
        ["Europa", 1/* 7 */], 
        ["Afrika", 1/* 10 */],
        ["Asien", 1/* 9 */],
        ["Nordamerika", 1/* 2 */],
        ["Südamerika", 1/* 1 */],
        ["Ozeanien", 1/* 1 */]
    ]

    let tempList = [];
    countryList = [];

    // Get Continents seperate
    for (let i = 0; i < continents.length; i++) {
        tempList[i] = [];
        for (let j = 0; j < countries.length; j++) {
            if (countries[j].continent == continents[i][0]) {
                tempList[i].push(countries[j]);
            }
        }
        tempList[i] = tempList[i].sort(() => {
            return Math.random() - 0.5
        })
    }

    // Push specifiy amount of countries per continent
    for (let i = 0; i < continents.length; i++) {
        for (let j = 0; j < continents[i][1]; j++) {
            countryList.push(tempList[i][j])
        }
    }
    
    // Shuffle list
    countryList = countryList.sort(() => {
        return Math.random() - 0.5
    })

    document.querySelector('#game .buttons').innerHTML =
    `<i title="Enter" class="fa-solid fa-check" onclick="checkCountry()"></i>
    <a></a>
    <i title="#" class="fa-solid fa-forward" onclick="skip()"></i></div>`
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
            loadSide("F")
            return;
        } else { // Next Round with the wrong answers
            setCountryList(true);
        }
    }

    completeCounter.innerHTML = `${index+1}/${countryList.length}`
    hidBox().querySelector('img').setAttribute("src", `https://flagcdn.com/h120/${countryList[index].code.toLowerCase()}.png`);

    inputField.value = "";
    inputField.placeholder = "";

    // Capital mode
    if (selectorOrder.flagType == "capital") {
        hidBox().querySelector('h3').innerHTML = countryList[index].name[0]
    }

    swap(); // Call swap animation

    hintCount = 0; // New country = reset hintCount

    if(selectorOrder.flagMode == "unranked"){
        scoreField.innerHTML = `Richtig ${index - wrongCountrys.length} / ${index}`;
    } else{
        tryCount = 0;
        document.querySelector('#game .buttons a').innerHTML = points;
        startTime = Math.floor(Date.now() / 1000);
        document.querySelector('.load').style.display = "block"

        scoreField.innerHTML = ""
        for (let i = 0; i < 3; i++) {
            if(i < lives){
                scoreField.innerHTML += `<i class="fa-solid fa-heart"></i>`
            } else{
                scoreField.innerHTML += `<i class="fa-regular fa-heart"></i>`
            }
        }

    }
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
    if (selectorOrder.flagType == "capital") {
        answer = countryList[index].capital;
    }

    // Loop goes throw all names from current Country
    for (let i = 0; i < answer.length; i++) {
        if (guess.replace(" ", "") == answer[i].toLowerCase().replace(" ", "")) {
            if(selectorOrder.flagMode == "ranked"){
                if(tryCount < pointsPerTry.length){
                    document.querySelector('.load').style.display = "none"
    
                    endTime = Math.floor(Date.now() / 1000);
                    let timeDiff = Math.ceil(endTime-startTime);
    
                    let multiplier = 1 / (Math.ceil(timeDiff) / 3);
                    points += pointsPerTry[tryCount]*multiplier;
                } else{
                    tryCount = 0;
                    skip(false);
                    return;
                }
            }

            skip(true);
            return;
        }
    }

    tryCount ++;
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
    if (selectorOrder.flagType == "capital") {
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

        if (selectorOrder.flagType == "capital") {
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

        if(setting.clearInput){
            inputField.value = "";
        }
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
    if (selectorOrder.flagType == "capital") {
        inputField.placeholder = countryList[index].capital[0];
    } else {
        inputField.placeholder = countryList[index].name[0];
    }
    lives--;
}

function finishedRound() {
    document.querySelector('#finishedRound p').innerHTML = `Du hast ${countryList.length - wrongCountrys.length} von ${countryList.length} richtig`

    if (wrongCountrys.length == 0) {
        document.querySelector('#finishedRound .buttons').innerHTML =
            `<p onclick="setCountryList();loadSide('G');">Neustart</p>
        <p onclick="loadSide('M')">Home</p>`
    } else {
        document.querySelector('#finishedRound .buttons').innerHTML =
            `<p onclick="setCountryList(true);loadSide('G');">Weiter</p>
        <p onclick="loadSide('M')">Home</p>`
    }
}

//#endregion

//**************** Event Listener ****************//
//#region

let flag = inputField;
flag.addEventListener("keydown", (event) => {
    if (event.keyCode == setting.skipKey) { // # --> Skip
        event.preventDefault();
        skip(false, true);
    }
    if (event.keyCode == setting.hintKey) { // * --> Hint
        event.preventDefault();
        loadHint();
    }
    if (event.keyCode == setting.checkKey) { // Enter --> Check
        checkCountry();
    }
});

//#endregion



//**************** Settings ****************//
let setting = {
    hintKey: 187,
    skipKey: 191,
    checkKey: 13,
    clearInput: false,
    isGerman: true,
    isDarkMode: true,
}