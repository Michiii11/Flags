//**************** Variables ****************//
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

// Set or load the Localstorage
if (localStorage.getItem("flagContinent") != undefined) {
    continent = localStorage.getItem("flagContinent")
} else {
    continent = localStorage.setItem("flagContinent", continent);
}
setCountryList()
loadSide('S');

//#endregion

//**************** Loader ****************//
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

    getCountry();
}


//#endregion



//**************** Base Functions ****************//
//#region

/**
 * Checks if the guess is correct
 * if it's true it goes into skip()
 * @param {*} i 
 */
function checkCountry(i) {
    let guess = document.querySelector('#input').value.toLowerCase();

    let answer = countryList[index].name;
    if (type == "H") {
        answer = countryList[index].capital;
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
 * Get the next flag from the api
 * updates the html
 */
function getCountry() {
    if (index >= countryList.length) {
        if (wrongCountrys.length == 0) {
            loadMenu();
        } else {
            setCountryList(true);
        }
    }

    document.querySelectorAll('#game h2')[0].innerHTML = `${index+1}/${countryList.length}`
    document.querySelector('div[data-position="hidden"] img').setAttribute("src", `https://flagcdn.com/h120/${countryList[index].code.toLowerCase()}.png`);
    document.querySelector('#input').value = "";
    document.querySelector('#input').placeholder = "";
    if (type == "H") {
        document.querySelector('#content h3').innerHTML = countryList[index].name[0]
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
                }
            }
        }
    }
    countryList = countryList.sort(() => {
        return Math.random() - 0.5
    })

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