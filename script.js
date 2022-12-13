
let newCountryList = countries.sort(() => {return Math.random() - 0.5});
let countryList = new Array();
let index = 0;
let wrongI = 0;
let wrongCountrys = new Array();
let hintCount = 0;

let type  // L = Country | H = Capital
let continent

if(localStorage.getItem("flagContinent")){
    continent = localStorage.getItem("flagContinent")
}
setCountryList()
loadMenu();



/**
 * Loads the Menu into the HTML
 */
function loadMenu(){
    document.querySelector('main').innerHTML =
        `<div id="content">
            <div class="buttons">
                <p onclick="loadGame('L');">Länder</p>
                <p onclick="loadGame('H');">Hauptstädte</p>
            </div>
            <div class="selector">
                <p class="all selected" onclick="selectContinent(this)">Alle Länder</p>
                <p class="Europa" onclick="selectContinent(this)">Europa</p>
                <p class="Afrika" onclick="selectContinent(this)">Afrika</p>
                <p class="Asien" onclick="selectContinent(this)">Asien</p>
                <p class="Nordamerika" onclick="selectContinent(this)">Nordamerika</p>
                <p class="Südamerika" onclick="selectContinent(this)">Südamerika</p>
                <p class="Ozeanien" onclick="selectContinent(this)">Ozeanien</p>
            </div>
        </div>`
    if(continent != "all"){
        selectContinent(document.querySelector(`.${continent}`))

    }
}

/**
 * Loads the Game Template into the HTML
 * @param {*} t is the Gamemode
 */
function loadGame(t){
    type = t;
    let content = ""
    content = 
        `<div id="content"><h2>${index+1}/${countryList.length}</h2>
        <section>
            <img data-position='show' src="">
            <img data-position='hidden' src="https://flagcdn.com/h120/${countryList[index].code.toLowerCase()}.png">
        </section>`

    if(type == "H"){
        content += `<h3></h3>`
    }

    content += `
        <input id="input" type="text" autocomplete="off" autofocus></div>
        <div class="buttons">
            <i title="+" class="fa-solid fa-lightbulb"></i>
            <i title="Enter" class="fa-solid fa-check"></i>
            <i title="#" class="fa-solid fa-forward"></i></div>
        <div id="score"></div>
        <div id="back" onclick=" loadMenu()"><i class="fa-solid fa-house"></i></div>`;

    document.querySelector('main').innerHTML = content;

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
    let hid = document.querySelector('#content img[data-position="hidden"]')
    let show = document.querySelector('#content img[data-position="show"]')
    hid.style.display = "block"

    hid.setAttribute("data-position", "show");
    show.setAttribute("data-position", "hidden");
    
    /////////////////////document.querySelectorAll('#content img').forEach((item)=> {item.style.display = "block"})
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

    document.querySelectorAll('#content h2')[0].innerHTML = `${index+1}/${countryList.length}`
    document.querySelector('#content img[data-position="hidden"]').setAttribute("src", `https://flagcdn.com/h120/${countryList[index].code.toLowerCase()}.png`);
    document.querySelector('#input').value = "";
    document.querySelector('#input').placeholder = "";
    if(type == "H"){
        document.querySelectorAll('#content h3')[0].innerHTML = countryList[index].name[0]
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