
let newCountryList = countries.sort(() => {return Math.random() - 0.5});
let index = 0;
let wrongI = 0;
let wrongCountrys = new Array();
let hintCount = 0;

let type  // L = Country | H = Capital | C = Competitive

loadMenu();

/**
 * Loads the Menu into the HTML
 */
function loadMenu(){
    document.querySelector('main').innerHTML =
        `<div id="content">
            <h2>Menü</h2>
            <div class="buttons">
                <p onclick="loadGame('L');">Country</p>
                <p onclick="loadGame('H');">Capital</p>
                <p onclick="loadGame('C');">Comp</p>
            </div>
        </div>`
}

/**
 * Loads the Game Template into the HTML
 * @param {*} t is the Gamemode
 */
function loadGame(t){
    type = t;
    let content = ""
    content = 
        `<div id="content"><h2>${index+1}/${newCountryList.length}</h2>
        <section>
            <img data-position='show' src="">
            <img data-position='hidden' src="https://flagcdn.com/h120/${newCountryList[index].code.toLowerCase()}.png">
        </section>`

    if(type == "H"){
        console.log()
        content += `<h3></h3>`
    }

    content += `
        <input id="input" type="text" autocomplete="off" autofocus></div>
        <div class="buttons"><i class="fa-solid fa-lightbulb"></i><i class="fa-solid fa-check"></i><i class="fa-solid fa-forward"></i></div>
        <div id="score"></div>
        <div id="back" onclick="loadMenu()"><i class="fa-solid fa-house"></i></div>`;

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
    
    let answer = newCountryList[index].name;
    if(type == "H"){
        answer = newCountryList[index].capital;
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
function loadHint(){
    hintCount++;
    if(hintCount == 1){
        wrongCountrys[wrongI++] = newCountryList[index];
    }
    document.querySelector('#input').value = ""
    if(type == "H"){
        document.querySelector('#input').placeholder = newCountryList[index].capital[0].substring(0,hintCount)
    } else{
        document.querySelector('#input').placeholder = newCountryList[index].name[0].substring(0,hintCount)
    }

    let flag = document.querySelector("#input");
    flag.focus();
}

function skip(ind, type){
    if(!ind){ // Falsche Eingabe
        if(type){ // Geskippte Eingabe
            wrongCountrys[wrongI++] = newCountryList[index];
            document.querySelector('#input').style.color = "rgb(110, 110, 110)";

            if(type == "H"){
                document.querySelector('#input').value = newCountryList[index].capital[0];
            } else{
                document.querySelector('#input').value = newCountryList[index].name[0];
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

function swap(){
    let hid = document.querySelector('#content img[data-position="hidden"]')
    let show = document.querySelector('#content img[data-position="show"]')
    hid.setAttribute("data-position", "show");
    show.setAttribute("data-position", "hidden");
}

function skipped(){    
    if(type == "H"){
        document.querySelector('#input').placeholder = newCountryList[index].capital[0];
    } else{
        document.querySelector('#input').placeholder = newCountryList[index].name[0];
    }
}

function getCountry() {
    document.querySelectorAll('#content h2')[0].innerHTML = `${index+1}/${newCountryList.length}`
    document.querySelector('#content img[data-position="hidden"]').setAttribute("src", `https://flagcdn.com/h120/${newCountryList[index].code.toLowerCase()}.png`);
    document.querySelector('#input').value = "";
    document.querySelector('#input').placeholder = "";
    if(type == "H"){
        document.querySelectorAll('#content h3')[0].innerHTML = newCountryList[index].name[0]
        console.log(newCountryList[index].capital)
    } else{
        console.log(newCountryList[index].name)
    }

    swap();

    hintCount = 0;
    
    document.querySelector('#score').innerHTML = `Richtig ${index - wrongI} / ${index}`;
    let flag = document.querySelector("#input");
    flag.focus();

}