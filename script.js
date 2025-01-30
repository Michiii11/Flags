//**************** Variables ****************//
//#region
let countryList = []; // List of all possible countries in current round - europe selected: all european countries
let index = 0; // Index of the current flag
let hintCount = 0; // Count of the shown letters
let baseListLength;
let isBackUp = false;
let isSinglePlayer

let colorContrast = getComputedStyle(document.documentElement).getPropertyValue('--color-contrast');

let isWrongGuess = false;
let wrongCountries = []; // List of the wrong answers
let isWaitingForSkip = false;
let isGameRunning = false;

let localStorageVersion = "fg_1_"

let selectorOrder = {
    flagType: "country",
    flagUn: ["yesun"],
    flagContinent: ["all", "Europa", "Afrika", "Asien", "Nordamerika", "Südamerika", "Ozeanien"],
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

inputField.addEventListener('input', function() {
    this.style.width = 'auto'; // Reset width to auto to calculate the new width
    this.style.width = Math.max(this.scrollWidth, this.clientWidth) + 'px';
});

// Pages
const startPage = document.querySelector('#start')
const modePage = document.querySelector('#mode')
const gamePage = document.querySelector('#game')
const multiPlayerPage = document.querySelector('#multiplayer')
const finishPage = document.querySelector('#finishedRound')
const backUpPage = document.querySelector('#backUpRound')

//#endregion

//**************** Loader ****************//
//#region

for (const [key, value] of Object.entries(selectorOrder)) {
    if (localStorage.getItem(`${localStorageVersion}` + key)) {
        selectorOrder[key] = localStorage.getItem(`${localStorageVersion}` + key)
    } else {
        localStorage.setItem(`${localStorageVersion}` + key, value)
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
    backUpPage.style.display = "none"
    isGameRunning = false;

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
            if(selectorOrder.flagContinent.length === 0){
                loadSide('mode');
                selectContinentsError()
            } else if(selectorOrder.flagUn.length === 0){
                loadSide('mode');
                selectUnError()
            }
            else{
                startGame();
            }
            break;
        case "finished":
            finishPage.style.display = "flex"
            isBackUp = false;
            finishedRound();
            break;
        case "backUp":
            backUpPage.style.display = "block"
            break;
    }
}
loadSide("mode")

/**
 * Start function
 * it sets the html for the Game (Country / Capital Mode)
 */
function startGame() {
    isGameRunning = true;
    if(isBackUp){
        isBackUp = false;
        loadSide("backUp")
    } else{
        // Set start img
        showBox().innerHTML = `<img src="">`
        hidBox().innerHTML = `<img src="https://flagsapi.com/${countryList[index].code.toLowerCase()}/flat/64.png">`

        // Capital Mode 
        if (selectorOrder.flagType === "capital") {
            showBox().innerHTML += `<h3></h3>`
            hidBox().innerHTML += `<h3>${countryList[index].name[0]}</h3>`

            if(selectorOrder.flagStyle === "show"){
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
        isBackUp = true;
    }
}

function toggleMode(index){
    isSinglePlayer = index === 0;
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
    if(type === "continent"){
        multipleSelector(elem)
    } else if(type === "un"){
        if (selectorOrder.flagUn.includes(elem.classList[0])) {
            selectorOrder.flagUn.splice(selectorOrder.flagUn.indexOf(elem.classList[0]), 1);
        } else {
            selectorOrder.flagUn.push(elem.classList[0]);
        }
    } else {
        if(document.querySelector(`.${type} .selected`)){
            document.querySelector(`.${type} .selected`).classList.remove("selected")
        }
        elem.classList.add("selected")
    
        selectorOrder.flagType = elem.classList[0]
    }

    setCountryList();
    setLocalStorage();
}

function multipleSelector(elem){
    if(!elem.classList.contains("all")){
        
        // Remove elem from list
        if(selectorOrder.flagContinent.includes(elem.classList[0])){
            selectorOrder.flagContinent.splice(selectorOrder.flagContinent.indexOf(elem.classList[0]), 1)

            if(selectorOrder.flagContinent.includes("all")){
                selectorOrder.flagContinent.splice(selectorOrder.flagContinent.indexOf("all"), 1)
            }
        } 
        // Add elem to list
        else{
            selectorOrder.flagContinent.push(elem.classList[0])
        }
    }

    // Toggle all on off
    if(elem.classList.contains("all") || selectorOrder.flagContinent.length === 6){
        if(selectorOrder.flagContinent.includes("all")){
            selectorOrder.flagContinent = []
        } else{
            selectorOrder.flagContinent = []
            for (let i = 0; i < language.german.mode.selectorContinent.length; i++) {
                selectorOrder.flagContinent.push(i === 0 ? "all" : language.german.mode.selectorContinent[i])
            }
        }
    }

    selectContinents();
}

function selectContinents(){
    for (let i = 0; i < selectorOrder.flagUn.length; i++) {
        document.querySelector(`.${selectorOrder.flagUn[i]}`).classList.add("selected")
    }

    // select all selects
    for (let i = 0; i < selectorOrder.flagContinent.length; i++) {
        document.querySelector(`.${selectorOrder.flagContinent[i]}`).classList.add("selected")
    }
}

function selectContinentsError(){
    let selector = document.querySelector('.selector.continent')
    selector.style.color = "red";
    selector.style.animation = "shake .7s"
    setTimeout(function () {
        selector.style.color = colorContrast;
        selector.style.animation = "none"

        if(setting.clearInput){
            selector.value = "";
        }
    }, 500);
}

function selectUnError(){
    let selector = document.querySelector('.selector.un')
    selector.style.color = "red";
    selector.style.animation = "shake .7s"
    setTimeout(function () {
        selector.style.color = colorContrast;
        selector.style.animation = "none"

        if(setting.clearInput){
            selector.value = "";
        }
    }, 500);
}

setCountryList(false)
/**
 * Set the List dependend on the Type of Continent
 * @param {boolean} isNewRound true = next round with false answers
 */
function setCountryList(isNewRound) {
    isBackUp = false;
    countryList = [];
    if (isNewRound) { // Clone false answers into the country list
        countryList = [...wrongCountries];
    } else {
        if (selectorOrder.flagContinent[0] === "all") { // Clone full list into the country list
            for (let i = 0; i < countries.length; i++) {
                if(selectorOrder.flagUn.includes("yesun") && countries[i].un === true){
                    countryList.push(countries[i]); // Set the country into the country list
                } else if(selectorOrder.flagUn.includes("noun") && countries[i].un === false) {
                    countryList.push(countries[i]); // Set the country into the country list
                }
            }
        } else {
            for (let i = 0; i < countries.length; i++) {
                for (let j = 0; j < selectorOrder.flagContinent.length; j++) {
                    if (countries[i].continent === selectorOrder.flagContinent[j]) { // Filter the continent
                        if(selectorOrder.flagUn.includes("yesun") && countries[i].un === true){
                            countryList.push(countries[i]); // Set the country into the country list
                        } else if(selectorOrder.flagUn.includes("noun") && countries[i].un === false) {
                            countryList.push(countries[i]); // Set the country into the country list
                        }
                    }
                }
            }
            baseListLength = countryList.length
        }
    }

    // Shuffle the country List
    countryList = countryList.sort(() => {
        return Math.random() - 0.5
    })

    // Reset the game variables
    index = 0;
    wrongCountries = [];
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
        if (wrongCountries.length === 0) { // Finished than go back to Menu
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
    inputField.title = ""

    // Capital mode
    if (selectorOrder.flagType === "capital") {
        if(setting.isGerman === false){
            hidBox().querySelector('h3').innerHTML = countryList[index].name[1]
        } else{
            hidBox().querySelector('h3').innerHTML = countryList[index].name[0]
        }
    }

    swap(); // Call swap animation

    hintCount = 0; // New country = reset hintCount

    // Update score and focus to inputField
    scoreField.innerHTML = `${currentLanguage.game[0]} ${index - wrongCountries.length} / ${index}`;
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
        if (guess.replace(/[^a-z]/gi, '') === answer[i].toLowerCase().replace(/[^a-z]/gi, '')) {
            index++;
            skip(true);
            return;
        }
    }

    if(!setting.isAutoSkip){
        skip();
    }
}

/**
 * Loads a hint for the flag
 */
function loadHint() {
    hintCount++;

    // Wrong answer
    if (hintCount === 1) {
        isWrongGuess = true;
        wrongCountries.push(countryList[index]);
    }

    inputField.value = ""

    // Get current country or capital, then substring it to the amount of hints
    let currentCountry = getCurrentAnswer();

    if(setting.isGerman){
        inputField.placeholder = currentCountry[0].substring(0, hintCount)
    } else{
        inputField.placeholder = currentCountry[1].substring(0, hintCount)
    }

    inputField.title = inputField.placeholder
    inputField.focus();
}

/**
 * Skips the current flag
 * @param {*} isCorrect is the indicator if the guess was right or false
 * @param {*} isSkipped is the indicator if the guess was completely skipped or not
 * @returns 
 */
function skip(isCorrect, isSkipped) {
    if(isWaitingForSkip){ 
        isWaitingForSkip = false

        index++;
        inputField.disabled = false;
        inputField.style.color = colorContrast;
        getCountry();
        return;
    }

    // Richtige Eingabe
    if (isCorrect) {

        // Accept Animation
        inputField.style.color = "green";
        setTimeout(function () {
            inputField.style.color = colorContrast;
            getCountry();
        }, 500);
        isWrongGuess = false
        return
    }

     // Geskippte Eingabe
    if (isSkipped) {
        if (!isWrongGuess) {
            wrongCountries.push(countryList[index]);
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

        if(!setting.confirmSkip){
            setTimeout(function () {    
                index++;
                inputField.disabled = false;
                inputField.style.color = colorContrast;
                getCountry();
            }, 1000);
        } else{
            isWaitingForSkip = true
        }

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
    document.querySelector('#finishedRound p').innerHTML = `Du hast ${baseListLength - wrongCountries.length} von ${baseListLength} richtig`

    let isNewRound = (wrongCountries.length !== 0)
    let tempIndex = (!isNewRound ? 2 : 3)

    document.querySelector('#finishedRound .buttons').innerHTML = 
    `<p onclick="setCountryList(${isNewRound});loadSide('game');">${currentLanguage.game[tempIndex]}</p>
    <p onclick="loadSide('mode');resetGame()">Home</p>`
}

/**
 * toogles the flag opacity
 */
function hideShowFlag(){
    let elem = document.querySelector('#content')
    elem.classList.toggle("big")

    document.querySelector(".fa-flag").classList.toggle("fa-solid")
    document.querySelector(".fa-flag").classList.toggle("fa-regular")

    if(elem.classList.contains("big")){
        selectorOrder.flagStyle = "show"
    } else{
        selectorOrder.flagStyle = "hidden"
    }

    localStorage.setItem(`${localStorageVersion}flagStyle`, selectorOrder.flagStyle)

    inputField.focus();
}

/**
 * @returns either the current country name or the capital name
 */
function getCurrentAnswer(){
    if(index < countryList.length){
        return (selectorOrder.flagType === "country" ? countryList[index].name : countryList[index].capital);
    }
}

function resetGame(){
    setCountryList();
    index = 0;
}

//#endregion

//**************** Event Listener ****************//
//#region

let settingChange = false;
addEventListener("keydown", (event) => {
    if(!settingChange){
        if (event.keyCode == setting.skipKey.keyCode) { // # --> Skip
            if(isGameRunning){
                event.preventDefault();
                skip(false, true);
            }
        }
        if (event.keyCode == setting.hintKey.keyCode) { // * --> Hint
            if(isGameRunning){
                event.preventDefault();
                loadHint();
            }
        }
        if (event.keyCode == setting.checkKey.keyCode) { // Enter --> Check
            if(isGameRunning){
                event.preventDefault();
                checkCountry();
            }
        }
    }
});

function activateKeybindsEventListener(){
    document.querySelectorAll('.hidden input').forEach((elem)=>{
        elem.addEventListener("keydown", function(event){
            event.stopPropagation()
            switch(elem.classList.value){
                case "hint": setting.hintKey.keyCode = event.keyCode; setting.hintKey.key = event.key; break;
                case "skip": setting.skipKey.keyCode = event.keyCode; setting.skipKey.key = event.key; break;
                case "guess": setting.checkKey.keyCode = event.keyCode; setting.checkKey.key = event.key; break;
            }

            setLocalStorage()
        })
    })
}

//#endregion


//**************** Settings ****************//
//#region

let setting = {
    hintKey: {key: "+", keyCode: 187},
    skipKey: {key: "#", keyCode: 191},
    checkKey: {key: "Enter", keyCode: 13},
    clearInput: false,
    confirmSkip: false,
    isGerman: false,
    isAutoSkip: true
}

if(localStorage.getItem(`${localStorageVersion}settingFlagGame`) || localStorage.getItem(`${localStorageVersion}selectorOrder`)){
    loadLocalStorage()
} else{
    setLocalStorage()
}

/**
 * loads the variables from the localStorage
 */
function loadLocalStorage(){
    // Set or load the Localstorage
    setting = JSON.parse(localStorage.getItem(`${localStorageVersion}settingFlagGame`))
    selectorOrder = JSON.parse(localStorage.getItem(`${localStorageVersion}selectorOrder`))

    setting.hintKey = setting.hintKey || {key: "+", keyCode: 187}
    setting.skipKey = setting.skipKey || {key: "#", keyCode: 191}
    setting.checkKey = setting.checkKey || {key: "Enter", keyCode: 13}
    setting.clearInput = setting.clearInput || false
    setting.confirmSkip = setting.confirmSkip || false
    setting.isGerman = setting.isGerman || false
    setting.isAutoSkip = setting.isAutoSkip || false

    generateHTML(false);
    updateSettings();
}

/**
 * sets the variables into the localStorage
 */
function setLocalStorage(){
    localStorage.setItem(`${localStorageVersion}settingFlagGame`, JSON.stringify(setting))
    localStorage.setItem(`${localStorageVersion}selectorOrder`, JSON.stringify(selectorOrder))
    updateSettings();
    generateHTML();
}

function updateSettings(){
    document.querySelectorAll('.buttons i')[0].title = setting.hintKey.key;
    document.querySelectorAll('.buttons i')[1].title = setting.checkKey.key;
    document.querySelectorAll('.buttons i')[2].title = setting.skipKey.key;

    if(setting.isAutoSkip){
        inputField.addEventListener("keyup", checkCountry)
    } else{
        inputField.removeEventListener("keyup", checkCountry);
    }
}

generateHTML(true);

/**
 * toggles the sidebar between open and close state
 * @param {*} elem 
 */
function toggleSidebar(elem) {
    // Close Sidebar
    if (elem.dataset.state === "open") {
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

//----------- toggle buttons -----------//
document.querySelectorAll('.toggle').forEach((elem)=>{
    elem.addEventListener("click", function(){
        elem.classList.toggle("on")

        if(elem.classList.contains("language")){
            setting.isGerman = !setting.isGerman;
            setLocalStorage();
        }

        if(elem.classList.contains("inputClear")){
            setting.clearInput = !setting.clearInput
            setLocalStorage();
        }

        if(elem.classList.contains("skipConfirm")){
            setting.confirmSkip = !setting.confirmSkip
            setLocalStorage();
        }

        if(elem.classList.contains("autoSkip")){
            setting.isAutoSkip = !setting.isAutoSkip
            setLocalStorage();
        }
    })
})



//#endregion