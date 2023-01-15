//**************** Variables ****************//
//#region
let countryList = []; // List of all possible countries in current round - eruope selected: all european countries
let index = 0; // Index of the current flag
let hintCount = 0; // Count of the shown letters

let colorContrast = getComputedStyle(document.documentElement).getPropertyValue('--color-contrast');

let isWrongGuess = false;
let wrongCountrys = []; // List of the wrong anwsers

let selectorOrder = {
    flagType: "country",
    flagContinent: "all",
    flagStyle: "show"
}

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

// Pages
const startPage = document.querySelector('#start');
const modePage = document.querySelector('#mode');
const gamePage = document.querySelector('#game');
const finishPage = document.querySelector('#finishedRound')

//#endregion

//**************** Loader ****************//
//#region

// load or set the selectorOrder from/into the localstorage
for (const [key, value] of Object.entries(selectorOrder)) {
    if (localStorage.getItem(key)) {
        selectorOrder[key] = localStorage.getItem(key)
    } else {
        localStorage.setItem(key, value)
    }
}

loadSide('start');
/**
 * Loads or deloads the current page
 * @param {*} type is the type of the page
 */
function loadSide(type) {
    // Reset the pages
    startPage.style.display = "none"
    modePage.style.display = "none"
    gamePage.style.display = "none"
    finishPage.style.display = "none"

    // Load the current page
    switch (type) {
        case "start":
            startPage.style.display = "flex";
            break;
        case "mode":
            modePage.style.display = "flex";
            break;
        case "game":
            gamePage.style.display = "block";
            startGame();
            break;
        case "finished":
            finishPage.style.display = "flex"
            finishedRound();
            break;
    }
}

/**
 * Start function
 * it sets the html for the Game (Country / Capital Mode)
 */
function startGame() {
    // Set start img
    showBox().innerHTML = `<img src="">`
    hidBox().innerHTML = `<img src="https://flagcdn.com/h120/${countryList[index].code.toLowerCase()}.png">`

    // Capital Mode 
    if (selectorOrder.flagType == "capital") {
        showBox().innerHTML += `<h3></h3>`
        hidBox().innerHTML += `<h3>${countryList[index].name[0]}</h3>`

        if(selectorOrder.flagStyle == "show"){
            hideShowFlag();
        }
        document.querySelector('.hideButton').style.display = "block"
    } else{
        if(document.querySelector('#content').classList.contains("big")){
            document.querySelector('#content').classList.remove("big")
        }
        document.querySelector('.hideButton').style.display = "none"
    }

    getCountry();
}


//#endregion

//**************** PreGame Functions ****************//
//#region

/**
 * Selects the continent from the class
 * @param {*} elem
 * @param {*} type type of the selector (type | continent)
 */
function selector(elem, type) {
    document.querySelector(`.${type} .selected`).classList.remove("selected")
    elem.classList.add("selected")
    selectorOrder.flagType = elem.classList[0]

    localStorage.setItem(`${type == "type" ? 'flagType' : 'flagContinent'}`, selectorOrder.flagType);
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

    // Reset the game variables
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
            loadSide("finished")
            return;
        } else { // Next Round with the wrong answers
            setCountryList(true);
        }
    }

    completeCounter.innerHTML = `${index+1}/${countryList.length}`
    // Load new flag
    hidBox().querySelector('img').setAttribute("src", `https://flagcdn.com/h120/${countryList[index].code.toLowerCase()}.png`);

    inputField.value = "";
    inputField.placeholder = "";

    // Capital mode
    if (selectorOrder.flagType == "capital") {
        hidBox().querySelector('h3').innerHTML = countryList[index].name[0]
    }

    swap(); // Call swap animation

    hintCount = 0; // New country = reset hintCount

    // Update score and focus to inputField
    scoreField.innerHTML = `${currentLanguage.game[0]} ${index - wrongCountrys.length} / ${index}`;
    inputField.focus();
}

/**
 * Checks if the guess is correct
 * if it's true it goes into skip() 
 */
function checkCountry() {
    let guess = inputField.value.toLowerCase();

    // set the answer either to country or to capital
    let answer = getCurrentAnswer();

    // Loop goes throw all names from current answer
    for (let i = 0; i < answer.length; i++) {
        if (guess.replace(" ", "") == answer[i].toLowerCase().replace(" ", "")) {
            skip(true);
            return;
        }
    }

    skip(false);
}

/**
 * Loads an hint for the flag
 */
function loadHint() {
    hintCount++;

    // Wrong answer
    if (hintCount == 1) {
        isWrongGuess = true;
        wrongCountrys.push(countryList[index]);
    }

    inputField.value = ""

    // Get current country or capital, then substring it to the amount of hints
    let currentCountry = getCurrentAnswer();

    if(setting.isGerman){
        inputField.placeholder = currentCountry[0].substring(0, hintCount)
    } else{
        inputField.placeholder = currentCountry[1].substring(0, hintCount)
    }

    inputField.focus();
}

/**
 * Skips the current flag
 * @param {*} isCorrect is the indicator if the guess was right or false
 * @param {*} isSkipped is the indicator if the guess was completly skipped or not
 * @returns 
 */
function skip(isCorrect, isSkipped) {
    // Richtige Eingabe
    if (isCorrect) {

        // Accept Animation
        inputField.style.color = "green";
        setTimeout(function () {
            inputField.style.color = colorContrast;
            index++;
            getCountry();
        }, 500);

        return
    }

     // Geskippte Eingabe
    if (isSkipped) {
        if (!isWrongGuess) {
            wrongCountrys.push(countryList[index]);
        }
        isWrongGuess = false

        // fill the input field with the answer
        if(setting.isGerman){
            inputField.value = getCurrentAnswer()[0]
        } else{
            inputField.value = getCurrentAnswer()[1]
        }
        inputField.disabled = true;

        // Skip animation
        inputField.style.color = "rgb(110, 110, 110)";
        setTimeout(function () {
            index++;
            inputField.disabled = false;
            inputField.style.color = colorContrast;
            getCountry();
        }, 1000);
        return
    }

    // Wrong Answer :  Fail Animation
    inputField.style.color = "red";
    inputField.style.animation = "shake 0.5s"
    setTimeout(function () {
        inputField.style.color = colorContrast;
        inputField.style.animation = "none"

        if(setting.clearInput){
            inputField.value = "";
        }
    }, 500);
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
 * sets the html to the finishedRound page
 */
function finishedRound() {
    document.querySelector('#finishedRound p').innerHTML = `Du hast ${countryList.length - wrongCountrys.length} von ${countryList.length} richtig`

    let isNewRound = (wrongCountrys.length == 0 ? false : true)
    let tempIndex = (!isNewRound ? 2 : 3)

    document.querySelector('#finishedRound .buttons').innerHTML = 
    `<p onclick="setCountryList(${isNewRound});loadSide('game');">${currentLanguage.game[tempIndex]}</p>
    <p onclick="loadSide('mode')">Home</p>`
}

/**
 * toogles the flag opacity
 */
function hideShowFlag(){
    document.querySelector('#content').forEach((elem)=>{
        elem.classList.toggle("big")

        if(elem.classList.contains("big")){
            selectorOrder.flagStyle = "show"
        } else{
            selectorOrder.flagStyle = "hidden"
        }

        localStorage.setItem("flagStyle", selectorOrder.flagStyle)
    })
    inputField.focus();
}

/**
 * @returns either the current country name or the capital name
 */
function getCurrentAnswer(){
    return (selectorOrder.flagType == "country" ? countryList[index].name : countryList[index].capital);
}

//#endregion

//**************** Event Listener ****************//
//#region

inputField.addEventListener("keydown", (event) => {
    if (event.keyCode == setting.skipKey.keyCode) { // # --> Skip
        event.preventDefault();
        skip(false, true);
    }
    if (event.keyCode == setting.hintKey.keyCode) { // * --> Hint
        event.preventDefault();
        loadHint();
    }
    if (event.keyCode == setting.checkKey.keyCode) { // Enter --> Check
        event.preventDefault();
        checkCountry();
    }
});

function activateKeybindsEventListener(){
    document.querySelectorAll('.hidden input').forEach((elem)=>{
        elem.addEventListener("keydown", function(){
            switch(elem.classList.value){
                case "hint": setting.hintKey.keyCode = event.keyCode; setting.hintKey.key = event.key; break;
                case "skip": setting.skipKey.keyCode = event.keyCode; setting.skipKey.key = event.key; break;
                case "guess": setting.checkKey.keyCode = event.keyCode; setting.checkKey.key = event.key; break;
            }

            saveSettingsLocalStorage()
        })
    })
}

//#endregion


//**************** Settings ****************//
//#region

let setting = {
    hintKey: {key: "+", keyCode: 187},
    skipKey: {key: "#", keyCode: 189},
    checkKey: {key: "Enter", keyCode: 13},
    clearInput: false,
    isGerman: true,
    isDarkMode: true,
}

if(localStorage.getItem("settingFlagGame")){
    loadSettingsLocalStorage()
} else{
    saveSettingsLocalStorage()
}
generateHTML();

/**
 * toggles the sidebar between open and close state
 * @param {*} elem 
 */
function toggleSidebar(elem) {
    // Close Sidebar
    if (elem.dataset.state == "open") {
        elem.dataset.state = "close"

        setTimeout(function () {
            // Set the close function onclick to the full field
            elem.querySelector(".heading").setAttribute("onclick", "")
            elem.setAttribute("onclick", "toggleSidebar(this)")
        }, 10)

    } 

    // Open Sidebar
    else {
        elem.dataset.state = "open"
        updateSettingsInput();

        // Set the close function onclick to the heading attribute
        elem.querySelector(".heading").setAttribute("onclick", "toggleSidebar(this.parentNode)")
        elem.setAttribute("onclick", "")
    }
}

function swapDarkMode(isStart){
    if(!isStart){
        setting.isDarkMode = !setting.isDarkMode;
        saveSettingsLocalStorage();
    }

    let styleKeys = [ "--shadow", "--grey-1", "--grey-1-5", "--grey-2", "--grey-3", "--grey-4", "--grey-5","--color-contrast"]
    let variableValue = [7, 12, 16, 20, 27, 35, 43, 100]

    for (let i = 0; i < styleKeys.length; i++) {
        document.documentElement.style.setProperty(styleKeys[i], `hsl(0, 0%, ${setting.isDarkMode ? variableValue[i] : 100-variableValue[i]}%)`);
    }

    colorContrast = getComputedStyle(document.documentElement).getPropertyValue('--color-contrast');
}

/**
 * loads the variables from the localStorage
 */
function loadSettingsLocalStorage(){
    // Set or load the Localstorage
    setting = JSON.parse(localStorage.getItem("settingFlagGame"))
    generateHTML();
}

/**
 * sets the variables into the localStorage
 */
function saveSettingsLocalStorage(){
    localStorage.setItem("settingFlagGame", JSON.stringify(setting))
    generateHTML();
 }

// toggle button
document.querySelectorAll('.toggle').forEach((elem)=>{
    elem.addEventListener("click", function(){
        elem.classList.toggle("on")

        if(elem.classList.contains("design")){
            swapDarkMode()
        }

        if(elem.classList.contains("language")){
            setting.isGerman = !setting.isGerman;
            saveSettingsLocalStorage();
        }

        if(elem.classList.contains("clearInput")){
            setting.clearInput = !setting.clearInput
            saveSettingsLocalStorage();
        }
    })
})

//#endregion